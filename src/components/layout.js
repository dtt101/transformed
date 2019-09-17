/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import preset from "@rebass/preset"

import Header from "./header"
import "./layout.css"

const theme = {
  ...preset,
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Box
        variant="styles.root"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            p: 3,
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
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
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
