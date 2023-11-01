import { buildImageUrl } from "cloudinary-build-url";
import { bundleMDX } from "mdx-bundler";

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
  const { code } = await bundleMDX({ source });
  return code;
}
