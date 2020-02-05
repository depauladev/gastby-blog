import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'


import Avatar from '../Avatar'

const ProfileWrapper = styled.section`
    color: #EEE;
    display: flex;
    flex-direction: column;
`

const ProfileLink = styled(Link)`
    color: #ff7315;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #eeeeee;
    }
`

const ProfileName = styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 1.5rem auto;
`

const ProfilePosition = styled.small`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 5px;
`

const ProfileDescription = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;
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
        <ProfileWrapper className="Profile-wrapper">
            <ProfileLink>
                <Avatar />
                <ProfileName>
                    {name}
                    <ProfilePosition>{position}</ProfilePosition>
                </ProfileName>
            </ProfileLink>
            <ProfileDescription>{description}</ProfileDescription>
        </ProfileWrapper>
    )
}

export default Profile
