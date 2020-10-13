import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"

const Avatar = ({ opened, setOpened}) => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Vitanarfróði einlittur.png" }) {
        childImageSharp {
          fluid(maxWidth: 240, maxHeight: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Button onClick={() => setOpened(!opened)}><ImageStyle
    style={{ maxHeight: "100%", position: "absolute" }}
    // imgStyle={{ objectFit: "contain" }}
    fluid={data.placeholderImage.childImageSharp.fluid}
    name="Fróði avatar"
  /></Button>

}


const ImageStyle = styled(Img)`
  width: 130px;
  height: 170px;
  position: absolute;
  bottom: 0;
`
const Button = styled.button`
  width: 130px;
  height: 170px;
  position: absolute;
  bottom: 0;
  left: 40px;
  border: none;
  background-color: #FEF9EC;
  &:active {
    opacity: 0.3;
  }
`
export default Avatar
