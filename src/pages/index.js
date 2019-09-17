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
      style={{ border: "1px solid #ccc", padding: "3px", textAlign: "center" }}
      action="https://tinyletter.com/transformed"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/transformed', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <p>
        <label for="tlemail">Enter your email address</label>
      </p>
      <p>
        <input
          type="text"
          style={{ width: "140px" }}
          name="email"
          id="tlemail"
        />
      </p>
      <input type="hidden" value="1" name="embed" />
      <input type="submit" value="Subscribe" />
    </form>
  </Layout>
)

export default IndexPage
