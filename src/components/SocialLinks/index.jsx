import React from 'react'
import styled from 'styled-components'

import Icons from './Icons'
import links from './content'

const SocialLinksWrapper = styled.nav`
    margin: 2rem auto;
    width: 100%;
`

const SocialLinksList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none;
`

const SocialLinksItem = styled.li``

const SocialLinksLink = styled.a`
    color: var(--texts);
    text-decoration: none;
    transition: color .3s;

    &:hover {
        color: var(--highlight)
    }
`

const IconWrapper = styled.div`
    fill: #bbb;
    width: 30px;
    height: 30px;
`

const SocialLinks = () => (
    <SocialLinksWrapper>
        <SocialLinksList>
            {links.map((link, i) => {
                const Icon = Icons[link.label]
                return (
                    <SocialLinksItem key={i}>
                        <SocialLinksLink 
                        href={link.url} 
                        title={link.label} 
                        target="_blank" rel="noopener noreferrer">
                            <IconWrapper>
                                <Icon/>
                            </IconWrapper>
                        </SocialLinksLink>
                    </SocialLinksItem>
                )
            })}
        </SocialLinksList>
    </SocialLinksWrapper>
)

export default SocialLinks