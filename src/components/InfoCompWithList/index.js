import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export const InfoCompWithList = ({ mainText, subText, image, description }) => {
  return (
    <div className="header-wrapper">
      <Container>
        <Row>
          <Col md={6} className="left-col">
            <div>
              <h1 className="MainText">{mainText}</h1>
              <p className="SubText">{subText}</p>
              <p className="description">{description}</p>
              <div className="IconList">
                <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                <p className="listContent">
                  Set dry signs spirit a kind First shall them.
                </p>
              </div>
              <div className="IconList">
                <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                <p className="listContent">
                  He two face one moved dominion man you're likeness
                </p>
              </div>
              <div className="IconList">
                <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                <p className="listContent">
                  Sea forth fill have divide be dominion from life
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="right-col">
            <img className="mainImage" alt="Header" src={image} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

InfoCompWithList.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}
