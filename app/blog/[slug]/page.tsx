import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import Date from "~/components/date";
import Mdx from "~/components/mdx";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, date: publishedTime, description, slug } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://jpreagan.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article itemScope itemType="http://schema.org/Article">
        <header className="mx-auto mb-8 max-w-5xl sm:px-4">
          <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-orange-400 px-4 py-16 sm:rounded-md md:px-8 md:py-24 lg:px-16 lg:py-32">
            <h1
              itemProp="headline"
              className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tighter"
            >
              {post.title}
            </h1>
            <p className="text-gray-200 md:text-lg lg:text-xl">
              <Date dateString={post.date} />
            </p>
          </div>
        </header>
        <section
          itemProp="articleBody"
          className="prose mx-auto my-4 px-4 dark:prose-invert md:prose-lg lg:prose-xl prose-a:text-sky-300 lg:my-16"
        >
          <Mdx code={post.body.code} />
        </section>
      </article>
    </>
  );
}
