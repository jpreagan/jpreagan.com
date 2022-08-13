import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Posts from "../components/posts";

import * as styles from "../styles/page.css";

export default function BlogPage() {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>Blog</h1>
        <Posts />
      </section>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Blog" />;
}
