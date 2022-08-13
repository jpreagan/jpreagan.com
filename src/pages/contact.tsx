import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Contact from "../components/contact";

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
