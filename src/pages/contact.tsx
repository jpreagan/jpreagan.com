import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Contact from "../components/Contact";

import * as styles from "../styles/page.css";

export default function ContactPage() {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <Contact />
      </section>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Contact" />;
}
