import React from "react"
import { Heading, Link, Text } from "rebass"

const Header = () => (
  <header>
    <Link
      href="/"
      sx={{
        textDecoration: "none",
        color: "text",
      }}
    >
      <Heading as="h1" fontSize={[5, 6, 7]}>
        transform
        <Text
          color="text"
          sx={{ display: "inline", backgroundColor: "highlight" }}
        >
          ed
        </Text>
        .digital
      </Heading>
    </Link>
  </header>
)
export default Header
