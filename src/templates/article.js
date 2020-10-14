import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../utils/mediaTemplate'
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'
import MenuContainer from '../components/header/menuContainer'
import Layout from '../components/layout'


const ArticleTemplate = ({ data }) => {
  const article = data.strapiArticle

  return (
    <Layout>
      <ContainerStyle>
      <MenuContainer opened={false} />
        <LinkStyle to="/news" ><GreenTitle>Tíðindi</GreenTitle></LinkStyle>
        <StyledContainer>
          <ContentContainer>
            <TitleStyle>{article.title}</TitleStyle>
            <DateStyle>{article.date}</DateStyle>
            <ImageStyle style={{ width: "100%" }} imgStyle={{ width: "100%" }} fixed={article.image?.childImageSharp.fixed} alt={article.title} />
            <MarkDownContainer source={article.content} />
          </ContentContainer>

        </StyledContainer>
      </ContainerStyle>
    </Layout>
  )
}

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;

`

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  margin: 20px;
  background-color: #FFFFFF;

`

const ContentContainer = styled.div`
  margin: 5px 15px;
`

const TitleStyle = styled.h2`
  font-size: 18px;
  height: 70px;
  overflow: hidden;
  `

const GreenTitle = styled(TitleStyle)`
  font-size: 28px;
  height: 70px;
  color: #58A449;
`

const LinkStyle = styled(Link)`
  text-decoration: none;
`

const DateStyle = styled.p`
  color: #58A449;
  font-size: 14px;

`


const ImageStyle = styled(Img)`
  // margin: 15px;

`



const MarkDownContainer = styled(ReactMarkdown)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  min-height: 100px;
  align-self: stretch;
  margin: 5px 0;
  text-align: left;
`
// const ParagraphImageStyle = styled.p`
//   display: flex;
//   img {
//     align-items: center;
//     justify-content: center;
//     margin: 0 10px;
//   }
// `

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      id
      title
      content
      description
      date
       image {
        childImageSharp {
            fixed(width: 1430, height: 450) {
              ...GatsbyImageSharpFixed
             }
          }
        }
    }
  }
`
