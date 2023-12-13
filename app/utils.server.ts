import validator from "validator";
import { buildImageUrl } from "cloudinary-build-url";
import { bundleMDX } from "mdx-bundler";
import rehypePrettyCode, {
  type Options as CodeHighlightOptions,
} from "rehype-pretty-code";

const DEFAULT_REDIRECT = "/";

export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT,
) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

export function validateEmail(email: unknown): email is string {
  return validator.isEmail(email as string);
}

export const getImageUrls = (imageUrl: string, widths: number[]): string => {
  return widths
    .map((width) => {
      const url = buildImageUrl(imageUrl, {
        cloud: {
          cloudName: "jpreagan",
        },
        transformations: {
          resize: {
            width: width,
          },
        },
      });
      return `${url} ${width}w`;
    })
    .join(", ");
};

export async function compileMdx(source: string) {
  const codeHighlightOptions: CodeHighlightOptions = {
    theme: "material-theme-darker",
  };

  const { code } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrettyCode, codeHighlightOptions],
      ];

      return options;
    },
  });
  return code;
}
