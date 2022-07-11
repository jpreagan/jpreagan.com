/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { BsCheckCircleFill as Check } from "react-icons/bs"

import { Link } from "../components/link"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SuccessPage = () => (
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
      <Link to="/" sx={{ variant: "styles.a" }}>
        &larr; Return home
      </Link>
    </section>
  </Layout>
)

export default SuccessPage
