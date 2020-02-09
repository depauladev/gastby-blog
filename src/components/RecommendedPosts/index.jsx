import React from "react"
import propTypes from "prop-types"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

const Wrapper = styled.section`
  /* border-bottom: 1px solid var(--borders); */
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
`

const Anchor = styled(AniLink)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--texts);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: ease 0.3s;
  width: 50%;


  ${media.lessThan("large")`
    padding: 1rem;
  `}

  &:hover {
    color: var(--highlight);
  }

  &.previous {
    border-right: 1px solid var(--borders);
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