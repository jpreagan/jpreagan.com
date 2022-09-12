import React, { useMemo } from "react";
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
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{frontmatter.title}</h1>
          <Date dateString={frontmatter.date} />
        </header>
        <section itemProp="articleBody">
          <blockquote>{frontmatter.description}</blockquote>
          <Component />
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
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
