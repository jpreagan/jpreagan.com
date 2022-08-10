import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import "../styles/global.css";

export default function IndexPage() {
  return (
    <Layout>
      <p>Hello, World!</p>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Aloha" />;
}
