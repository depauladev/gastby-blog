import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import media from "styled-media-query"
// import { TransitionPortal } from "gatsby-plugin-transition-link"

import GlobalStyles from '../styles/global'

import Header from '../components/Header'
import Menubar from './Menubar'

const LayoutWrapper = styled.section`
  min-height: 100vh;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

const LayoutMain = styled.main`
  background-color: var(--background);
  max-width: 900px;
  margin: 0 auto;
  padding: 26px 0;

  ${media.lessThan("large")`
    padding:0;
  `}
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />

      <Header />
      <LayoutMain>{children}</LayoutMain>   
      <Menubar />
    
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout