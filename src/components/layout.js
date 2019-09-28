/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"
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
            © {new Date().getFullYear()}
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
