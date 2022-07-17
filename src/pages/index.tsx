/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Posts from "../components/posts"
import Contact from "../components/contact"

function IndexPage() {
  return (
    <React.Fragment>
      <header>
        <h1
          sx={{
            position: "absolute",
            left: -10000,
            top: "auto",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          Aloha
        </h1>
      </header>
      <Layout>
        <Seo title="Aloha" />
        <div sx={{ maxWidth: 680, mx: "auto" }}>
          <Intro />
          <Posts />
          <Contact />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
