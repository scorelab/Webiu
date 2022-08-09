import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"

export const GradientBanner = ({
  bannerImage,
  mainHeading,
  buttonText,
  buttonLink,
  tagLine,
}) => {
  return (
    <div
      className="gardientBannerWrap"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <h2 className="bannerTitle">{mainHeading}</h2>
      <p className="bannerSubText">{tagLine}</p>
      {buttonText ? (
        <a href={buttonLink}>
          <Button className="bannerBtn">
            {buttonText}
            <FontAwesomeIcon className="bannerIcon" icon={faArrowRight} />
          </Button>
        </a>
      ) : null}
    </div>
  )
}

GradientBanner.propTypes = {
  bannerImage: PropTypes.string,
  mainHeading: PropTypes.string,
  tagLine: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}
