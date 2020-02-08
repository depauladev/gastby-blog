import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"
import { Clock } from 'styled-icons/feather/Clock'

const Anchor = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ease .3s;
  
  &:hover,
  &:hover h1{
    color: var(--highlight);
  }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    /* padding: 2rem 1rem; */
  `}
`

const Wrapper = styled.article`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 1.3rem 1rem;
  width: 90%;
  margin: 0 auto;
`

const Category = styled.div`
  align-items: center;
  color: var(--postCategory);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  text-transform: uppercase;
  width: 130px;

  ${media.lessThan("large")`
    display: none;
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  
  ${media.lessThan("large")`
    margin: 0;
    margin-left: 12px;
  `}
`

const PostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Datespan = styled.time`
  font-size: 0.8rem;
  margin-top: 8px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
`

const StyledClock = styled(Clock)`
    width: .8rem;
    margin-left: 10px;
    margin-right: 5px;
    margin-bottom: 1px;
`

const Title = styled.h1`
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: var(--postTitle);
`

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--postDescription);
`

const PostItem = ({slug, category, date, timeToRead, title, description, author }) => (
    <Anchor fade duration={0.8} to={ slug }>
      <Wrapper>
        <Category>{ category }</Category>
        <Info>
          <Datespan>{ date }</Datespan>
          <Title>
            { title }
          </Title>
          <Description>
            { description }
          </Description>
          <PostInfoWrapper>
            <Datespan>{ author }</Datespan>
            {
              timeToRead ? (<Datespan> <StyledClock /> { timeToRead } min de leitura </Datespan>) : ''
            }
          </PostInfoWrapper>
        </Info>
      </Wrapper>
    </Anchor>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string
}

 export default PostItem