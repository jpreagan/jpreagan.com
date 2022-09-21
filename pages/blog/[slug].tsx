import React, { useMemo } from "react";
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
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article itemScope itemType="http://schema.org/Article">
        <header className="mx-auto mb-8 rounded-md bg-gradient-to-r from-purple-800 via-pink-600 to-orange-400 py-16 px-4 md:px-8 md:py-24 lg:py-32 lg:px-16">
          <h1
            itemProp="headline"
            className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-6xl"
          >
            {frontmatter.title}
          </h1>
          <p className="text-gray-200">
            <Date dateString={frontmatter.date} />
          </p>
        </header>
        <section
          itemProp="articleBody"
          className="prose mx-auto my-4 prose-a:text-sky-600 dark:prose-invert dark:prose-a:text-sky-300 md:prose-lg lg:prose-xl"
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
