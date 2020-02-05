import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => {
    const query = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "me.jpg"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    const { avatarImage } = query

    return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar