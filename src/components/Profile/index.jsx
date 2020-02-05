import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

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
        <div className="Profile-wrapper">
            <Avatar />
            <h1>{name}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Profile
