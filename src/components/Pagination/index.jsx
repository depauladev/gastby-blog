import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const PaginationWrapper = styled.section`
    align-items: center;
    border-top: 1px solid #38444d;
    color: #eee;
    display: flex;
    padding: 1.5rem 3rem;
    justify-content: space-between;
    a {
    color: #EEE;
    text-decoration: none;
    transition: color 0.5s;

        &:hover {
            color: #ff7315;
        }
    }
`

const Pagination = props => {
    const { isFirst, isLast,currentPage,numPages, prevPage, nextPage } = props

    return  (<PaginationWrapper>
                {!isFirst && <Link to={prevPage}>← página anterior</Link>}
                <p>{currentPage} de {numPages}</p>
                {!isLast && <Link to={nextPage}>proxima página →</Link>}
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