import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import DescriptionContainer from "../components/DescriptionContainer"
import LinksList from "../components/LinksList"
import GuideLines from "../components/GuideLines"
import ButtonWithHeading from "../components/ButtonWithHeading"
import { Container, Col, Row } from "react-bootstrap"
import {useGsocData} from '../queries/gsoc'
import { navigate } from "gatsby"

const GsocPage = () => {
  const gsoc = useGsocData()
  
  return (
    <MainLayout>
      <SEO title="Score Labs GSOC Page" />
      <Header 
        mainText={gsoc.title}
        small
      />
      <DescriptionContainer
        image={gsoc.mainImage}
        mainText={gsoc.description}
      />
      <Container>
        <Row>
          <Col>
            <LinksList 
              links={gsoc.links}
            />
          </Col>
        </Row>
      </Container>
      <GuideLines 
        heading={gsoc.guidelinesHeading}
        description={gsoc.guidelinesDescription}
        guidelines={gsoc.guidelines}
      />
      <ButtonWithHeading 
        heading={gsoc.projectListHeading}
        buttonText={gsoc.projectListButtonText}
        onClick={() => navigate(gsoc.projectListUrl)}
      />
    </MainLayout>
  )
}

export default GsocPage