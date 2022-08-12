import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export const ContributeBanner = ({
  mainText,
  subText,
  gitBtnText,
  gitBtnLink,
  image,
  bannerBackground,
  contributeLink,
  contributeText,
}) => {
  return (
    <div
      className="contributeBannerWrap"
      style={{ backgroundColor: `${bannerBackground}` }}
    >
      <Container>
        <Row>
          <Col md={6} className="bannerLeftCol">
            <h1>{mainText}</h1>
            <p>{subText}</p>
            <div className="buttons-div">
              {contributeText ? (
                <a href={contributeLink} className="contirbuteBtn">
                  {contributeText}
                </a>
              ) : null}
              {gitBtnText ? (
                <a href={gitBtnLink} className="gitBtn">
                  <FontAwesomeIcon icon={faGithub} className="gitIcon" />
                  {gitBtnText}{" "}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="externalIcon"
                  />
                </a>
              ) : null}
            </div>
          </Col>
          <Col md={6} className="bannerRightCol">
            <img
              className="contributeBannerImage"
              alt="contirbute Image"
              src={image}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ContributeBanner.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  gitBtnText: PropTypes.string,
  gitBtnLink: PropTypes.string,
  bannerBackground: PropTypes.string,
  image: PropTypes.string,
  contributeText: PropTypes.string,
  contributeLink: PropTypes.string,
}
