import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import DescriptionContainer from "../components/DescriptionContainer"
import { Row, Container, Col } from "react-bootstrap"
import {useOpportunitiesData} from '../queries/opportunities'

const OpportunitiesPage = () => {
  const opportunities = useOpportunitiesData()

  return (
    <MainLayout>
      <SEO title="Score Labs Opportunities Page" />
      <Header 
        mainText={opportunities.title}
        small
      />
      <Container>
        <Row>
          <Col lg={7}>
            <DescriptionContainer
              title={opportunities.section1.heading}
              mainText={opportunities.section1.description}
            />
          </Col>
          <Col lg={5}>
            <img src={opportunities.section1.image} style={{width: '95%', paddingTop: 40 }}/>
          </Col>
        </Row>
        <br />
        <br />
        <hr />
        <Row>
          <Col lg={6}>
            <DescriptionContainer
            title={opportunities.section2.left.heading}
            subTitle={opportunities.section2.left.subHeading}
              mainText={opportunities.section2.left.description}
            />
          </Col>
          <Col lg={6}>
            <DescriptionContainer
              title={opportunities.section2.right.heading}
              subTitle={opportunities.section2.right.subHeading}
              mainText={opportunities.section2.right.description}
            />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default OpportunitiesPage