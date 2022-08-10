import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Posts from "../components/Posts";

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
