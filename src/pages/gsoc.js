import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import DescriptionContainer from "../components/DescriptionContainer"
import {useGsocData} from '../queries/gsoc'
import LinksList from "../components/LinksList"
import { Container, Col, Row } from "react-bootstrap"
import GuideLines from "../components/GuideLines"

const GsocPage = () => {
  const gsoc = useGsocData()

  console.log(gsoc)

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

      


    </MainLayout>
  )
}

export default GsocPage