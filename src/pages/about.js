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

            <p>Olá sou o Luiz de Paula, sou de Londrina/PR.</p>
            <p>
                Comecei meus estudos em programação no primeiro dia do ano de 2018
                e já em abril consegui meu primeiro trabalho como front-end onde fazia sites institucionais, e-commerces VTEX e Loja Integrada.
                Tempos depois fui para Solintel/Tars onde iniciei meus trabalhos no back-end só que também atuando no front com Knockout.js e ASP.Net.
                Ajudei a desenvolver aplicações como <a href="https://si.solintel.com.br/" target="_blank" rel="noopener noreferrer"> ERP Solintel</a> e <a href="https://www.walledgarden.com.br" target="_blank" rel="noopener noreferrer">WalledGarden</a>,
                tambem tomei a frente no projeto do sistema de gerenciamento de filas para as UPAs de Londrina.
                Hoje trabalho com tótens de auto atendimento para provedores e restaurantes.
            </p>
            <p>
                Meu conhecimento em grande parte foi de artigos e videos gratuitos sejam em portugues ou inglês. 
                Então como parte do meu agradecimento vou tentar devolver à comunidade o conhecimento que pude adquirir.
            </p>

            <p>
                Gostaria de agradecer ao meu grande amor Ana Luisa por me apoiar e me ajudar em tudo que faço.
            </p>

            <div>
                <h2>Habilidades</h2>

                <h3>Front</h3>
                <ul>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>Vue.js</li>
                    <li>React</li>
                    <li>Knockout.js</li>
                    <li>Design Responsivo (Mobile First)</li>
                    <li>CSS & SASS</li>
                    <li>CSS Frameworks</li>
                    <li>Worpress</li>
                    <li>VTEX</li>
                </ul>

                <h3>Back</h3>
                <ul>
                    <li>NodeJS</li>
                    <li>Express.js</li>
                    <li>Restify</li>
                    <li>C#</li>
                    <li>.Net Core & Framework</li>
                    <li>ASP.Net</li>
                    <li>Entity Framework</li>
                </ul>

                <h3>General</h3>
                <ul>
                    <li>Git</li>
                    <li>TortoiseHg</li>
                    <li>SQL</li>
                    <li>Graphql</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Knex</li>
                    <li>MySQL</li>
                    <li>Scrum</li>
                    <li>Jira</li>
                    <li>AWS (EC2, S3, Lambda)</li>
                </ul>
            </div>
        </article>
      </S.MainContent>
    </Layout>
)

export default AboutPage