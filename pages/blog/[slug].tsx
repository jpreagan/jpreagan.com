import * as React from "react";
import Head from "next/head";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import Date from "../../components/date";
import type { Frontmatter } from "../../lib/types";

type Props = {
  code: string;
  frontmatter: Frontmatter;
};

export default function BlogPost({ code, frontmatter }: Props) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article itemScope itemType="http://schema.org/Article">
        <header className="mx-auto mb-8 max-w-5xl sm:px-4">
          <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-orange-400 py-16 px-4 sm:rounded-md md:px-8 md:py-24 lg:py-32 lg:px-16">
            <h1
              itemProp="headline"
              className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tighter"
            >
              {frontmatter.title}
            </h1>
            <p className="text-gray-200 md:text-lg lg:text-xl">
              <Date dateString={frontmatter.date} />
            </p>
          </div>
        </header>
        <section
          itemProp="articleBody"
          className="prose mx-auto my-4 px-4 prose-a:text-sky-600 dark:prose-invert dark:prose-a:text-sky-300 md:prose-lg lg:my-16 lg:prose-xl"
        >
          <Component />
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      ...postData,
    },
  };
};
