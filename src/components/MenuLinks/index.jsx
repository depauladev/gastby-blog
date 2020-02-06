import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import links from './content'

const Wrapper = styled.nav``

const List = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
`

const ListItem = styled.li`
    padding: .5rem 0;

    .active {
        color: #ff7315;
    }
`

const Anchor = styled(Link)`
    color: #78838E;
    text-decoration: none;
    transition: ease .3s;

    &:hover {
        color: #ff7315;
    }
`

const MenuLinks = () => (
    <Wrapper>
        <List>
            {links.map((link, i) => 
                <ListItem key={i}>
                    <Anchor to={link.url} activeClassName="active">
                        {link.label}
                    </Anchor>
                </ListItem>
            )}
        </List>
    </Wrapper>
)

export default MenuLinks