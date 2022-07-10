import * as React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <>
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
        <Projects />
        <Contact />
      </div>
    </Layout>
  </>
)

export default IndexPage
