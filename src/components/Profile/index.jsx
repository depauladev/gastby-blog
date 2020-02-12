import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'
import media from "styled-media-query"

import SocialLinks from '../SocialLinks'

const Caret = styled.span`
    -webkit-animation-name: blink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
        
    -moz-animation-name: blink;
    -moz-animation-duration: 1s;
    -moz-animation-iteration-count: infinite;
    
    -ms-animation-name: blink;
    -ms-animation-duration: 1s;
    -ms-animation-iteration-count: infinite;
    
    -o-animation-name: blink;
    -o-animation-duration: 1s;
    -o-animation-iteration-count: infinite;
    
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    top: -10px;
    left: 3px;
    position: relative;
`

const Wrapper = styled.section`
    max-width: 900px;
    width: 900px;
    margin: 0 auto;
    display: flex;
`

const SocialWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const ProfileWrapper = styled.section`
    display: flex;
`

const ProfileLink = styled(AniLink)`
    text-decoration: none;
    color: #FFF;

    &:hover h1{
        color: var(--highlight);
    }
`

const ProfileName = styled.h1`
    font-size: 3.6rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: bold;
    transition: color 0.5s;
    font-family: monospace;

    ${media.lessThan("large")`
        margin-bottom: 0;
    `}
`

const ProfileDescription = styled.p`
    font-size: 28px;
    font-weight: 300;

    ${media.lessThan("large")`
        font-size: 18px;
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
    const { name, description } = query.site.siteMetadata

    return (
        <Wrapper>
            <ProfileLink fade duration={0.8} to="/">
                <ProfileWrapper>
                    <ProfileName>{name}<Caret>_</Caret></ProfileName>
                </ProfileWrapper>
                <ProfileDescription>{description}</ProfileDescription>
            </ProfileLink>
            <SocialWrapper>
                <SocialLinks />
            </SocialWrapper>
        </Wrapper>
    )
}

export default Profile
