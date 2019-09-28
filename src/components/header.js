import React from "react"
import { Box, Heading, Link, Text } from "rebass"

const Header = () => (
  <Box as="header" p={[1, 2, 4]}>
    <Link
      href="/"
      sx={{
        textDecoration: "none",
        color: "text",
      }}
    >
      <Heading as="h1" fontSize={[5, 7, 8]} mt={[2, 3, 5]}>
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
  </Box>
)
export default Header
