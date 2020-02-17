import React from "react"
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--texts);
  margin-top: 45px;
  text-align: center;
`
const Sad = styled.p`
  color: #2e9fff;
  font-size: 128px;
  transform: rotate(90deg);
  margin: 45px 0;
`

const Title = styled.h1`
  font-size: 28px;
`

const Home = styled(AniLink)`
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--texts);
    text-decoration: none;
    transition: color 0.3s linear;
    z-index: 10;

    &:hover {
        color: var(--postHover);
    }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <Title>O que você estava procurando não está aqui.</Title>
      <Sad> :( </Sad>
      <Home to="/" title="Voltar para home">
        Voltar
      </Home>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
