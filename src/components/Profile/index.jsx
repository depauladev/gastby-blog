import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'
import media from "styled-media-query"

import Avatar from '../Avatar'

const Wrapper = styled.section`
    color: var(--texts);
    display: flex;
    flex-direction: column;
`

const ProfileLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    ${media.lessThan("large")`
        display: flex;
        text-align: left;
    `}

    &:hover {
        color: var(--highlight);
    }
`

const ProfileName = styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 1.5rem auto;

    ${media.lessThan("large")`
        font-size: 1.2rem;
        margin: 0 0 0 10px;
    `}
`

const ProfilePosition = styled.small`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 5px;

    ${media.lessThan("large")`
        font-size: 0.8rem;
        margin-top: 0.2rem;
    `}
`

const ProfileDescription = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;

    ${media.lessThan("large")`
        display: none;
    `}
`

const Profile = () => {
    const query = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    description
                    name
                    position
                }
            }
        }          
    `)
    const { name, position, description } = query.site.siteMetadata

    return (
        <Wrapper className="Profile-wrapper">
            <ProfileLink fade duration={0.8} to="/">
                <Avatar />
                <ProfileName>
                    {name}
                    <ProfilePosition>{position}</ProfilePosition>
                </ProfileName>
            </ProfileLink>
            <ProfileDescription>{description}</ProfileDescription>
        </Wrapper>
    )
}

export default Profile
