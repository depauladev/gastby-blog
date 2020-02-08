import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

import links from './content'

const Wrapper = styled.nav``

const List = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;

    ${media.lessThan("large")`
        display: none;
    `}
`

const ListItem = styled.li`
    padding: .5rem 0;

    .active {
        color: #ff7315;
    }
`

const Anchor = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: ease .3s;

    &:hover {
        color: var(--highlight);
    }
`

const MenuLinks = () => (
    <Wrapper>
        <List>
            {links.map((link, i) => 
                <ListItem key={i}>
                    <Anchor to={link.url} fade duration={0.8} activeClassName="active">
                        {link.label}
                    </Anchor>
                </ListItem>
            )}
        </List>
    </Wrapper>
)

export default MenuLinks