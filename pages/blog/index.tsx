import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import Posts from "../../components/posts";
import { getBlogPostData } from "../../lib/posts";
import type { PostData } from "../../lib/types";

type Props = {
  allPostsData: PostData[];
};

export default function BlogPage({ allPostsData }: Props) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="My personal website built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="my-16 mb-8 text-4xl font-bold text-black md:mb-10 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Blog
        </h1>
      </header>

      <section className="mb-16">
        <Posts allPostsData={allPostsData} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getBlogPostData();
  return {
    props: {
      allPostsData,
    },
  };
}
