import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
// import Pagination from '../components/Pagination'

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    // const { currentPage, numPages } = props.pageContext
    // const isFirst = currentPage === 1
    // const isLast = currentPage === numPages
    // const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
    // const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
        <SEO title="Home" slug=""/>
        {postList.map(post => {
          const { fields, timeToRead, frontmatter } = post.node
          const { category, date, description, title, author } = frontmatter
  
          return (
            <PostItem key={fields.slug}
              slug={fields.slug}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              author={author}
            />
          )
        })}

        {/* <Pagination
            isFirst={isFirst}
            isLast={isLast}
            currentPage={currentPage}
            numPages={numPages}
            prevPage={prevPage}
            nextPage={nextPage}
        /> */}
      </Layout>
    )
}

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                fields {
                    slug
                }
                frontmatter {
                    category
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    description
                    title
                    author
                }
                timeToRead
                }
            }
        }
    }
`

export default BlogList