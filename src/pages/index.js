import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Text } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box maxWidth={900}>
      <Text fontSize={4}>
        transform
        <Text
          color="text"
          sx={{ display: "inline", backgroundColor: "highlight" }}
        >
          ed
        </Text>
        .digital is a fortnightly newsletter covering innovation, strategy and
        technology in higher education.
      </Text>
      <Text fontSize={3} my={4}>
        Sign up to get the latest news, articles and links.
      </Text>
      <Box>
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
        </form>
      </Box>
      <Text>
        Your information will not be shared, and only used to send this email.
        You can unsubscribe easily at any time.
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
