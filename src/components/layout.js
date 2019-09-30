/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Box, Text, Link } from "rebass"
import { ThemeProvider } from "emotion-theming"
import preset from "@rebass/preset"

import Header from "./header"

const theme = {
  ...preset,
  ...{
    colors: {
      background: "#3ee9c5",
      gray: "#e9eeed",
      highlight: "hsla(200, 0.10%, 0.2%, 0.125)",
      muted: "#f3b096",
      primary: "#e93eb9",
      secondary: "#3ee96e",
      text: "#004466",
    },
  },
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        variant="styles.root"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          color: "text",
          backgroundColor: "background",
          margin: "-8px",
        }}
      >
        <Box
          sx={{
            p: 3,
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            flex: "1 1 auto",
            p: 3,
          }}
        >
          <Box as="main" p={[1, 2, 4]}>
            {children}
          </Box>
        </Box>
        <Box
          sx={{
            p: 3,
          }}
        >
          <Box as="footer" p={[1, 2, 4]}>
            <Text>
              © <Link href="https://twitter.com/versusg">David Thompson</Link>{" "}
              {new Date().getFullYear()}.
            </Text>
            <Text>
              <span role="img" aria-label="heart">
                ❤️
              </span>
              to <Link href="https://gatsbyjs.org">Gatsby</Link>,{" "}
              <Link href="https://buttondown.email">Buttondown</Link>,{" "}
              <Link href="https://rebassjs.org">Rebass</Link> and{" "}
              <Link href="https://emotion.sh">Emotion</Link>.
            </Text>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
