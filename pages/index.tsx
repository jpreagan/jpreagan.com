import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Aloha from "../components/aloha";
import Posts from "../components/posts";
import { getBlogPostData } from "../lib/posts";
import type { PostData } from "../lib/types";

type Props = {
  allPostsData: PostData[];
};

export default function IndexPage({ allPostsData }: Props) {
  return (
    <Layout>
      <Head>
        <title>Aloha</title>
        <meta
          name="description"
          content="My personal website built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="sr-only">Aloha</h1>
      </header>

      <section className="my-16 lg:my-32">
        <Aloha />
      </section>

      <section className="my-16 lg:my-32">
        <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
          Recent posts
        </h2>
        <Posts allPostsData={allPostsData} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getBlogPostData().slice(0, 4);
  return {
    props: {
      allPostsData,
    },
  };
}
