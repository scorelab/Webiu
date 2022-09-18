import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ProjectDetailCard = ({
  image,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="ProjectDetailCardWrap">
      <Container>
        <div className="ProjectDetailCardDiv">
          <Row>
            <Col md={3} className="ProjectDetailCardLeftCol">
              <img src={image} />
            </Col>
            <Col md={8} className="ProjectDetailCardRightCol">
              <div>
                <p className="">{description}</p>
                {buttonText ? (
                  <a href={buttonLink}>
                    <button className="ProjectDetailCardBtn">
                      {buttonText} <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </button>
                  </a>
                ) : null}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

ProjectDetailCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}
