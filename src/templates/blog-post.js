import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import ProgressBar from "../components/ProgressBar"

// Onde ficam os estilos dos posts
import * as S from '../components/Post/styled'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title, date, description, author } = post.frontmatter
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <ProgressBar scroll="70%"/>
      <SEO title={title} description={description}/>
      <S.PostHeader>
        <S.PostDate>
          {date}
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostAuthor>Por: { author }</S.PostAuthor>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        author
      }
      html
      timeToRead
    }
  }
`

export default BlogPost