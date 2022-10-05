import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const CardThemeFour = ({ image, title, description }) => {
  return (
    <div className="cardThemeFourWrap">
      <img src={image} className="cardThemeFourImage" alt="logo" />
      <h4 className="cardThemeFourTitle">{title}</h4>
      <p className="cardThemeFourDescription">{description}</p>
    </div>
  )
}
CardThemeFour.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
