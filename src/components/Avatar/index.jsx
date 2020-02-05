import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const AvatarStyled = styled(Img)`
    border-radius: 50%;
    height: 3.75rem;
    margin: auto;
    width: 3.75rem;
`

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

    return <AvatarStyled fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar