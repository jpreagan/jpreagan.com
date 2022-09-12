import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <Head>
        <title>404: Not Found</title>
        <meta
          name="description"
          content="My personal website built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>404: Page not found.</h1>
      </header>
    </Layout>
  );
}
