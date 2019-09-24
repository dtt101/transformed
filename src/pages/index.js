import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Digital Transformation in Education</h1>
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
  </Layout>
)

export default IndexPage
