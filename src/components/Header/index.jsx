import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query"

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'

const HeaderWrapper = styled.div`
    padding: 35px 0;
    background: var(--mediumBackground);
    z-index: 10;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    margin-bottom: 7px;
    color: #FFF;

    display: flex;

    ${media.lessThan("large")`
        padding: 1rem;
    `}
`
const SocialWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    ${media.lessThan("large")`
        display: none;
    `}
`

const Container = styled.div`
    max-width: 900px;
    width: 900px;
    margin: 0 auto;
    display: flex;
`

const Header = () => (
    <HeaderWrapper>
        <Container>
            <Profile />
            <SocialWrapper>
                <SocialLinks />
            </SocialWrapper>
        </Container>
    </HeaderWrapper>
)

export default Header