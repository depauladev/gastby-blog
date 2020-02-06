import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `)
  const postList = query.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(post => {
        const { fields, timeToRead, frontmatter } = post.node
        const { background, category, date, description, title } = frontmatter

        return (
          <PostItem
            slug={fields.slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
