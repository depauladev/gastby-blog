import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link } from "gatsby"

const Anchor = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ease .3s;
  
  &:hover {
    color: var(--highlight);
  }
`

const Wrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`

const Tag = styled.div`
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 50%;
  color: #000;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

const Datespan = styled.time`
  font-size: 0.9rem;
  margin-bottom: 3px;
`

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

const PostItem = ({slug, category, date, timeToRead, title, description, background }) => (
    <Anchor to={ slug }>
      <Wrapper>
        <Tag background={background}>{ category }</Tag>
        <Info>
          <Datespan>{ date } • { timeToRead } min de leitura</Datespan>
          <Title>
            { title }
          </Title>
          <Description>
            { description }
          </Description>
        </Info>
      </Wrapper>
    </Anchor>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

 export default PostItem