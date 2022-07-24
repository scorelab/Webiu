import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const ServicesCard = ({ image, title, description }) => {
  return (
    <div className="service-card-wrapper">
      <img src={image} className="Service-Image" alt="logo" />
      <h4 className="service-title-text">{title}</h4>
      <p className="serivice-card-description">{description}</p>
    </div>
  )
}
ServicesCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
