import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import GlobalStyles from '../styles/global'

import Sidebar from './Sidebar'
import Menubar from './Menubar'

const LayoutWrapper = styled.section`
  display: flex;
`

const LayoutMain = styled.main`
  background-color: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
      <Menubar />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout