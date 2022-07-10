/** @jsx jsx */
import { jsx, Heading, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { BsCheckCircleFill as Check } from "react-icons/bs"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Success" />
    <header sx={{ mt: 5, textAlign: "center" }}>
      <Heading as="h1" variant="styles.h1" sx={{ fontSize: 6, my: 5 }}>
        Mahalo
      </Heading>
      <Check size={200} sx={{ color: "#22c55e" }} />
    </header>
    <section sx={{ my: 5 }}>
      <p>Your message has been sent successfully!</p>
      <p>
        I appreciate you reaching out, and I typically respond within 48 hours.
      </p>
      <Link as={GatsbyLink} to="/">
        &larr; Return home
      </Link>
    </section>
  </Layout>
)

export default NotFoundPage
