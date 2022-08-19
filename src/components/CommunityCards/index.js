import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const CommunityCard = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="comCardWrap">
      <img src={image} className="comImage" alt="logo" />
      <h4 className="comTitleText">{title}</h4>
      <p className="comCardDescription">{description}</p>
    </div>
  )
}
CommunityCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
