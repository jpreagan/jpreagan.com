/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Heading
    as="h1"
    sx={{
      fontSize: 6,
    }}

    >
      Heading 1
      </Heading>
    <p>Hello, World!</p>
  </Layout>
)

export default IndexPage
