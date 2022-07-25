import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Link } from "gatsby"

export const IndividualCard = ({
  image,
  iconImage,
  title,
  description,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className="card-div">
      <img src={image} className="FeatureImage" alt="logo" />
      <div>
        <img src={iconImage} className="iconImage" alt="image-icon" />
      </div>
      <h4 className="title-text">{title}</h4>
      <p className="item-description">{description}</p>
      <div>
        <Link className="main-button" to={buttonLink}>
          {buttonText}
        </Link>
      </div>
      <hr align="left" />
    </div>
  )
}
IndividualCard.propTypes = {
  image: PropTypes.string,
  iconImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}
