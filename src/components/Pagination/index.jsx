import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'
import media from "styled-media-query"

const PaginationWrapper = styled.section`
    align-items: center;
    /* border-top: 1px solid var(--borders); */
    color: var(--texts);
    display: flex;
    padding: 1.5rem 3rem;
    justify-content: space-between;

    ${media.lessThan("large")`
        font-size: .8rem;
        padding: 1rem;
    `}

    a {
        color: var(--texts);
        text-decoration: none;
        transition: color 0.5s;

        &:hover {
            color: var(--highlight);
        }
    }
`

const Pagination = props => {
    const { isFirst, isLast,currentPage,numPages, prevPage, nextPage } = props

    return  (<PaginationWrapper>
                {!isFirst && <AniLink fade duration={0.8} to={prevPage}>← página anterior</AniLink>}
                <p>{currentPage} de {numPages}</p>
                {!isLast && <AniLink  fade duration={0.8} to={nextPage}>proxima página →</AniLink>}
            </PaginationWrapper>)
} 
  
Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
}
  
export default Pagination