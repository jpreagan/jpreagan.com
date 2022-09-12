import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Untitled</title>
        <meta
          name="description"
          content="My personal website built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello, World!</h1>
    </Layout>
  );
}
