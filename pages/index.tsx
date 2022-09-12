import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getBlogPostData } from "../lib/posts";

type Props = {
  allPostsData: {
    date: string;
    title: string;
    slug: string;
    description: string;
  }[];
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

      {allPostsData.map(({ slug, date, title }) => (
        <Link href={`/blog/${slug}`} key={slug}>
          <article>
            <h2>{title}</h2>
            <p>{date}</p>
          </article>
        </Link>
      ))}
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
