import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <Layout>
      <p>404: Page not found.</p>
    </Layout>
  );
}

export function Head() {
  return <Seo title="404: Not Found" />;
}
