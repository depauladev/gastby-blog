import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as S from '../components/Post/styled'

const AboutPage = () => (
    <Layout>
      <SEO title={"Sobre mim"} />
      <S.MainContent style={{
          padding: '0rem 5rem'
      }}>
        <article>
            <h1>Sobre mim</h1>

            <p>Olá sou o Luiz de Paula.</p>
            <p>Meu foco hoje vem sendo em .NET, Design de codigo e Testes.</p>
            <p>Meu conhecimento em grande parte foi de artigos e videos gratuitos sejam em portugues ou inglês. Então como parte do meu agradecimento vou tentar devolver à comunidade o conhecimento que pude adquirir.</p>
        </article>
      </S.MainContent>
    </Layout>
)

export default AboutPage