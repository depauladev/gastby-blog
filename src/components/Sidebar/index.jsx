import React from 'react'
import styled from 'styled-components'

import Profile from '../Profile'

const SidebarWrapper = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    width: 20rem;
    padding: 2rem;
    text-align: center;
    border-right: 1px solid #38444d;
    background-color: #192734;
`

const Sidebar = () => (
    <SidebarWrapper>
        <Profile/>
    </SidebarWrapper>
)

export default Sidebar