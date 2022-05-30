import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Intro />
  </Layout>
)

export default IndexPage
