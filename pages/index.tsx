import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Aloha from "../components/aloha";
import Posts from "../components/posts";
import ContactForm from "../components/contact-form";
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

      <section className="my-16 mx-auto max-w-5xl px-4 lg:my-32">
        <Aloha />
      </section>

      <section className="my-16 mx-auto max-w-5xl px-4 lg:my-32">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100  md:text-3xl lg:text-4xl">
          Recent posts
        </h2>
        <Posts allPostsData={allPostsData} />
        <p className="my-8 md:text-lg lg:text-xl">
          ✨ See{" "}
          <Link
            className="dark:text-sky:300 text-sky-600 underline"
            href="/blog"
          >
            all posts
          </Link>
          .
        </p>
      </section>
      <section className="my-16 mx-auto max-w-5xl px-4 lg:my-32">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl lg:text-4xl">
          Get in touch
        </h2>
        <ContactForm />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = (await getBlogPostData()).slice(0, 4);
  return {
    props: {
      allPostsData,
    },
  };
}
