import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card-wrapper">
      <img src={image} className="feature-image" alt="logo" />
      <h4 className="feature-title-text">{title}</h4>
      <p className="feature-card-description">{description}</p>
    </div>
  )
}
FeatureCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
