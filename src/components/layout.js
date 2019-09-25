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
      highlight: "hsla(205, 100%, 40%, 0.125)",
      muted: "#f3b096",
      primary: "#e93eb9",
      secondary: "#3ee96e",
      text: "#c51c3d",
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
          <main>{children}</main>
        </Box>
        <Box
          sx={{
            p: 3,
          }}
        >
          <footer>© {new Date().getFullYear()}</footer>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
