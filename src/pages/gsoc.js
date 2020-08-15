import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { navigate } from "gatsby"
import { faSun } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import DescriptionContainer from "../components/DescriptionContainer"
import LinksList from "../components/LinksList"
import MailingListFeed from "../components/MailingListFeed"
import GuideLines from "../components/GuideLines"
import ButtonWithHeading from "../components/ButtonWithHeading"
import GitterRoomsList from "../components/GitterRoomsList"
import { useGsocData } from '../queries/gsoc'

const GsocPage = () => {
  const gsoc = useGsocData()
  
  return (
    <MainLayout>
      <SEO title="Score Labs GSOC Page" />
      <Header 
        mainText={gsoc.title}
        icon={faSun}
        backgroundColor={'#fff8e4'}
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
      <br />
      <GuideLines 
        heading={gsoc.guidelinesHeading}
        description={gsoc.guidelinesDescription}
        guidelines={gsoc.guidelines}
      />
      <br />
      <MailingListFeed 
        title={gsoc.mailingListHeading}
        feedUrl={gsoc.mailingListFeedUrl}
      />
      <br />
      <GitterRoomsList 
        title={gsoc.gitterRoomsListHeading}
        gitterOrganizationName={gsoc.gitterOrganizationName}
        gitterToken={gsoc.gitterToken}
      />
      <br />
      <ButtonWithHeading 
        heading={gsoc.projectListHeading}
        buttonText={gsoc.projectListButtonText}
        onClick={() => navigate(gsoc.projectListUrl)}
      />
      <br />
    </MainLayout>
  )
}

export default GsocPage