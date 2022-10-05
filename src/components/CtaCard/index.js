import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const CtaCard = ({ image, description,  buttonText, buttonLink }) => {
  return (
    <div className="ctaCardWrapper">
      <img src={image} className="ctaCardImage" alt="logo" />
      <div className="ctaCardComp">
      <p className="ctaCardDescription">{description}</p>
      {buttonText ? (
        <a href={buttonLink}>
          <button className="ctaBtn">{buttonText}</button>
        </a>
      ) : null}
      </div>
    </div>
  )
}
CtaCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}
