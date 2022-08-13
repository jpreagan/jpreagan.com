import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

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
