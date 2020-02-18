import React from "react"
import propTypes from "prop-types"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

const Wrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    padding: 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
`

const Anchor = styled(AniLink)`
  align-items: center;
  color: var(--postHover);
  display: flex;
  padding: 2rem;
  text-decoration: none;
  transition: ease 0.3s;
  width: 50%;
  flex: 1;

  ${media.lessThan("large")`
    padding: 1rem;
  `}

  &.next {
    justify-content: flex-end;
    text-align: right;
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
        <Anchor fade duration={0.8} to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </Anchor>
      )}
      {next && (
        <Anchor fade duration={0.8} to={next.fields.slug} className="next">
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