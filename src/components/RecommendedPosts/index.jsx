import React from "react"
import propTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.section`
  border-bottom: 1px solid #ff7315;
  border-top: 1px solid #ff7315;
  background: #222831;
  display: flex;
`

const Anchor = styled(Link)`
  align-items: center;
  background: #222831;
  color: #EEE;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: #38444d;
  }
  &.previous {
    border-right: 1px solid #ff7315;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`

const RecommendedPosts = ({ next, previous }) => (
    <Wrapper>
      {previous && (
        <Anchor to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </Anchor>
      )}
      {next && (
        <Anchor to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </Anchor>
      )}
    </Wrapper>
  )
  
RecommendedPosts.propTypes = {
    next: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string.isRequired,
      }),
      fields: propTypes.shape({
        slug: propTypes.string.isRequired,
      }),
    }),
    previous: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string.isRequired,
      }),
      fields: propTypes.shape({
        slug: propTypes.string.isRequired,
      }),
    }),
}
  
export default RecommendedPosts