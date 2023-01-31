import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, {
  type Options as CodeHighlightOptions,
} from "rehype-pretty-code";
import type { PluggableList } from "unified";
import type { Frontmatter } from "./types";

// Define the path for the "/posts" directory
const postsPath = path.join(process.cwd(), "posts");

/**
 * Reads the contents of the '/posts' directory, parses the frontmatter of each
 * post's 'index.mdx' file, and returns the result sorted by date with the
 * newest post first.
 *
 * @returns {Promise<Array<PostData>>} Returns an array of post data of all
 * blog posts sorted by date with the newest post first
 */
export async function getBlogPostData() {
  const subdirectories = await fs.promises
    .readdir(postsPath)
    .then((files: string[]) => {
      return files.filter((file: string) =>
        fs.promises
          .lstat(path.join(postsPath, file))
          .then((stat: fs.Stats) => stat.isDirectory())
      );
    });

  const allPostsData = subdirectories.map((subdirectory) => {
    const fullPath = path.join(postsPath, subdirectory, "index.mdx");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug: subdirectory,
      ...(matterResult.data as Frontmatter),
    };
  });

  // Sort the posts by date, with the newest post first
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

/**
 * Reads the contents of the '/posts' directory and returns an array of objects
 * containing the 'slug' of each post.
 *
 * @returns {Promise<Array<{params: {slug: string}}>>} Returns an array of
 * objects with the 'slug' of each post
 */
export async function getAllPostSlugs() {
  const subdirectories = await fs.promises
    .readdir(postsPath)
    .then((files: string[]) => {
      return files.filter((file: string) =>
        fs.promises
          .lstat(path.join(postsPath, file))
          .then((stat: fs.Stats) => stat.isDirectory())
      );
    });

  return subdirectories.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });
}

const remarkPlugins: PluggableList = [remarkGfm];

const codeHighlightOptions: Partial<CodeHighlightOptions> = {
  theme: JSON.parse(
    fs.readFileSync("./lib/themes/tokyo-night-color-theme.json", "utf-8")
  ),
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

const rehypePlugins: PluggableList = [
  rehypeSlug,
  rehypeAutolinkHeadings,
  [rehypePrettyCode, codeHighlightOptions],
];

/**
 * Returns the data for a single blog post given its slug.
 * @param {string} slug - The unique identifier of the blog post.
 * @returns {Object} An object containing the data for the blog post, including
 * its compiled and bundled MDX, front matter, and slug.
 */
export async function getPostData(slug: string) {
  const fullPath = path.join(postsPath, slug);
  const source = fs.readFileSync(path.join(fullPath, "index.mdx"), "utf8");

  const imports = await fs.promises
    .readdir(fullPath)
    .then((directoryContents) => {
      return directoryContents.filter((file) => path.extname(file) === ".tsx");
    });

  const files: { [key: string]: string } = {};

  for (const file of imports) {
    const contents = fs.readFileSync(path.join(fullPath, file), "utf8");
    files[`./${file}`] = contents;
  }

  const { code, frontmatter } = await bundleMDX({
    source,
    files,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        ...rehypePlugins,
      ];

      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };
}
