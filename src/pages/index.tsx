import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Aloha from "../components/Aloha";

import "../styles/global.css";
import * as styles from "../styles/index.css";

export default function IndexPage() {
  return (
    <Layout>
      <header className={styles.header}>
        <h1>Aloha</h1>
      </header>
      <section className={styles.section}>
        <Aloha />
      </section>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Aloha" />;
}
