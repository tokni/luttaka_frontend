
import Image from 'gatsby-image'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import PetalMenu from '../components/front_page_large_screens/petalMenu'
import MenuContainer from '../components/header/menuContainer'
import Layout from '../components/layout'
import SearchBar from '../components/searchBar'
import { media } from "../utils/mediaTemplate"
import { graphql } from 'gatsby'

const Videos = ({ data }) => {

  const videos = data.allStrapiVideo.edges
  const [input, setInput] = useState(``)
  return (
      <Layout>
        <MenuContainer />
        <PetalContainer name="petal container">
          <PetalMenu />
        </PetalContainer>
        <TitleStyle>FILMAR</TitleStyle>
        <SearchBar setInput={setInput} />
      <ContainerStyle>
        {videos.filter((video) => video.node.title.toLowerCase().match(input.toLowerCase())).map((video, index) => {
          return (
            <BackgroundStyle key={index}>
              <LinkStyle href={video.node.link} key={index}>{video.node.title}
                <ImageStyle
                  style={{ width: "100%" }}
                  fluid={video.node.thumbnail.childImageSharp.fluid}
                  alt={video.node.title} />
              </LinkStyle>
              <DateContainer>{video.node.date}</DateContainer>
              <MarkDownContainer source={video.node.description}/>
            </BackgroundStyle>
          )
        })}
      </ContainerStyle>
      </Layout>
  )
}

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  max-width: 1200px;
  width: 100%;
  ${media.desktop3`
    max-width: 600px;

    flex-direction: column;
  `}
`

const PetalContainer = styled.div`
  display: flex;
  ${media.desktop3`
    display: none;
  `}

`
const BackgroundStyle = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  background-color: #FFFFFF;
  max-width: 450px;
  ${media.phone1`
    max-width: 330px;

  `}
  width: 100%;
`

const TitleStyle = styled.h3`
  color: #58A449;
  font-size: 24px;
  ${media.desktop3`
    display: block;
    margin-top: 100px;
  `}
`

const LinkStyle = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-decoration: none;
  background-color: #FFFF;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin: 20px;
  max-width: 430px;

  width: 100%;
`

const ImageStyle = styled(Image)`
  margin: 20px;
`

const DateContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin-left: 10px;
  color: #74AB58;
`
const MarkDownContainer = styled(ReactMarkdown)`
  margin: 20px;
  background-color: white;
  width: 100%;
  p {
    margin: 10px;
  }
`

export default Videos

export const PageQuery = graphql`
 query fetchVideos {
   allStrapiVideo(sort: {fields: date, order: ASC}) {
     edges {
       node {
         id
         title
         description
         link
         date(formatString: "DD-MM-YYYY")
         thumbnail {
           childImageSharp {
             fluid(maxWidth: 850, maxHeight: 425) {
                 ...GatsbyImageSharpFluid
             }
           }
         }
       }
     }
   }
 }

 `
