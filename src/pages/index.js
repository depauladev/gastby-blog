import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledH1 = styled.h1`
  color: #eeeeee;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledH1>Home</StyledH1>
  </Layout>
)

export default IndexPage
