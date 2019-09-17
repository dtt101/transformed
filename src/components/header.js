import PropTypes from "prop-types"
import React from "react"
import { Heading, Link } from "rebass"
import { ThemeProvider } from "emotion-theming"

const Header = ({ siteTitle }) => (
  <header>
    <Link
      href="/"
      sx={{
        textDecoration: "none",
        color: "text",
      }}
    >
      <Heading as="h1" fontSize={[5, 6, 7]}>
        {siteTitle}
      </Heading>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
