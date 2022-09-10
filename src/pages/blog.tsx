import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Posts from "../components/posts";

import * as styles from "../styles/page.css";

import { PostProps } from "../../types";

export default function BlogPage({ data }: PageProps<PostProps>) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>Blog</h1>
        <Posts posts={posts} />
      </section>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Blog" />;
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
