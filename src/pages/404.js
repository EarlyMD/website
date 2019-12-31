import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import styled from "styled-components"

import Footer from "../components/sections/footer"
import { Container } from "../components/global"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navigation />
    <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>
            NOT FOUND
            </h1>
            <h2>
            You just hit a route that doesn&#39;t exist... the sadness.
            </h2>      
          </HeaderTextGroup>      
        </Flex>
      </Container>
    <Footer />
  </Layout>
)

export default NotFoundPage



const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    margin-top: 200px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
