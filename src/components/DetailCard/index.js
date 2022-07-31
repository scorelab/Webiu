import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const DetailCard = ({ title, description }) => {
  return (
    <div className="detail-card-wrapper">
      <h4 className="detail-title-text">{title}</h4>
      <p className="detail-card-description">{description}</p>
      <hr/>
    </div>
  )
}

DetailCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
