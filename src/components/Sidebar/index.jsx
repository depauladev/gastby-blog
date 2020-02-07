import React from 'react'
import styled from 'styled-components'

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

const SidebarWrapper = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    width: 20rem;
    padding: 2rem;
    text-align: center;
    border-right: 1px solid #ff7315;
    background: #222831;
`

const Sidebar = () => (
    <SidebarWrapper>
        <Profile />
        <SocialLinks />
        <MenuLinks />
    </SidebarWrapper>
)

export default Sidebar