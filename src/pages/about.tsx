import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import About from "../components/About";

import * as styles from "../styles/page.css";

export default function AboutPage() {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>About me</h1>
        <About />
      </section>
    </Layout>
  );
}

export function Head() {
  return <Seo title="About me" />;
}
