import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Aloha from "../components/aloha";
import Post from "../components/posts";
import Contact from "../components/contact";

import "../styles/global.css";
import * as styles from "../styles/index.css";

import { PostProps } from "../../types";

export default function IndexPage({ data }: PageProps<PostProps>) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <header className={styles.header}>
        <h1>Aloha</h1>
      </header>
      <section className={styles.section}>
        <Aloha />
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>Recent posts</h2>
        <Post posts={posts} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>Get in touch</h2>
        <Contact />
      </section>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Aloha" />;
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`;
