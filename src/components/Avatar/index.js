import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery (
      graphql`
        query {
          avatarImage: file(relativePath: { eq: "foto-perfil-2.jpg" }) {
            childImageSharp {
              fixed(width: 200, height: 200, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }              
        }

      ` 
  )
  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar