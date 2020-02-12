import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from "styled-media-query"

const AvatarStyled = styled(Img)`
    border-radius:65% 35% 69% 31% / 39% 61% 39% 61% ;
    height: 3.75rem;
    width: 3.75rem;
`

const Avatar = () => {
    const query = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "me.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 60) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const { avatarImage } = query

    return <AvatarStyled fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar