import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import { bundleMDX } from "mdx-bundler";
import type { Frontmatter } from "./types";

const postsDirectory = path.join(process.cwd(), "posts");

export function getBlogPostData() {
  const filenames = fs.readdirSync(postsDirectory);
  const allPostsData = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Frontmatter),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars
    mdxOptions(options, frontmatter) {
      // eslint-disable-next-line no-param-reassign
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      // eslint-disable-next-line no-param-reassign
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism];

      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };
}
