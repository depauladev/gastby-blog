import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query"

import Profile from '../Profile'

const HeaderWrapper = styled.div`
    padding: 35px 0;
    background: var(--mediumBackground);
    z-index: 10;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    margin-bottom: 7px;
    color: #FFF;

    ${media.lessThan("large")`
        padding: 1rem;
    `}
`

const Header = () => (
    <HeaderWrapper>
        <Profile />
    </HeaderWrapper>
)

export default Header