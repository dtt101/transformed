import React from "react"
import { Box, Text, Button, Link } from "rebass"
import { Input, Label } from "@rebass/forms"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box maxWidth={900}>
      <Text fontSize={4} mb={5}>
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
      <Text fontSize={3}>
        Sign up to get the latest news, articles and links.
      </Text>
      <Text fontSize={3}>
        To get an idea of the format you can{" "}
        <Link href="https://buttondown.email/transformed/archive/">
          read past newsletters online
        </Link>
        .
      </Text>
      <Box mb={5}>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/transformed"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/transformed', 'popupwindow')"
          class="embeddable-buttondown-form"
        >
          <Label htmlFor="email" mt={4} mb={2} fontSize={3} color="text">
            Email
          </Label>
          <Input
            mb={4}
            maxWidth={450}
            type="email"
            name="email"
            id="bd-email"
            placeholder="you@example.com"
          />
          <Input type="hidden" value="1" name="embed" />
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </form>
      </Box>
      <Text mb={4}>
        It is curated by David Thompson, currently Head of Software Development
        at the University of York, formerly Director of Digital Products at the
        Raspberry Pi Foundation and Principal Engineer at Sky. This is not an
        official University of York publication and all opinions within are my
        own.
      </Text>
      <Box mb={3}>
        <Text>
          Your information will not be shared, and only used to send the regular
          newsletter.
        </Text>
        <Text>
          You can unsubscribe easily at any time using the link in the email.
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
