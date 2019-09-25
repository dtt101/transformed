import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => (
  <Layout>
    <SEO title="Thank You for signing up for transformed.digital" />
    <h1>Thank you</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Thanks
