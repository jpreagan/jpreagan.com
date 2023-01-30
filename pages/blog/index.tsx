import Head from "next/head";
import { GetStaticProps } from "next";
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
          content="Learn about web development with my latest blog posts."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="mx-auto mb-8 max-w-5xl px-4 text-4xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Blog
        </h1>
      </header>

      <section className="mx-auto mb-16 max-w-5xl px-4">
        <Posts allPostsData={allPostsData} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getBlogPostData();
  return {
    props: {
      allPostsData,
    },
  };
};
