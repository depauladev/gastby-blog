import React from 'react'
import styled from 'styled-components'
// import media from "styled-media-query"

import Icons from './Icons'
import links from './content'

const SocialLinksWrapper = styled.nav`

`

const SocialLinksList = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
`

const SocialLinksItem = styled.li`
    margin-right: 20px;
`

const SocialLinksLink = styled.a`
    text-decoration: none;
    transition: color .3s;
    color: #FFF;

    &:hover {
        color: var(--postHightlight)
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