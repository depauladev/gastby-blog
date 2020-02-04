import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Profile = () => {
    const query = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    title
                    description
                    author
                    position
                }
            }
        }          
    `)
    const { author, position, description } = query.site.siteMetadata

    return (
        <div className="Profile-wrapper">
            <h1>{author}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Profile
