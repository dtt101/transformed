import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box>
      <Heading>Digital Transformation in Education</Heading>
      <p>
        Sign-up to our occasional newsletter for articles, approaches and news.
      </p>
      <p>Now go build something great.</p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/transformed"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/transformed', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <label for="bd-email">Enter your email</label>
        <input type="email" name="email" id="bd-email" />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
        <p>
          <a
            href="https://buttondown.email"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Buttondown.
          </a>
        </p>
      </form>
    </Box>
  </Layout>
)

export default IndexPage
