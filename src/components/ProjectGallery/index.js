import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const ProjectGalleryCard = (args) => {
    const { image,
        description,
        button1Text,
        button2Text,
        button1Link,
        button2Link
    }=args
  return (
    <div className="ProjectGalleryCardWrap">
      <Container className="ProjectGalleryContainer">
         <Row>
            <Col>
                <Container>
                    <Row className="ProjectGalleryTitle">Project Gallery</Row>
                    <Row className="ProjectGalleryHead">SCoRe lab Projects</Row>
                    <Row className="ProjectGalleryDesc">{description}</Row>
                </Container>
            </Col>
            <Col>
                <Container>
                    <Row className="ProjectGalleryImg"><img src={image} /></Row>
                    <Row>
                        <Container>
                            <Row>
                                <Col className="ProjectGalleryBtn"><div className="ProjectGalleryBtn1"><a href={button1Link }>{button1Text}</a></div></Col>
                                <Col className="ProjectGalleryBtn"><div className="ProjectGalleryBtn2"><a href={button2Link}>{button2Text}</a></div></Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </Col>
         </Row>
      </Container>
    </div>
  )
}

ProjectGalleryCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}
