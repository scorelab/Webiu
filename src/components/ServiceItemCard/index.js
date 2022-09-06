import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { propTypes } from "react-bootstrap/esm/Image"

export const ServiceItemCard = ({
  image,
  title,
  description,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className="serviceItemcardWrap">
      <img src={image} className="serviceItemCardImage" alt="logo" />
      <h4 className="serviceItemCardTitle">{title}</h4>
      <p className="seriviceItemCardDescription">{description}</p>
      {buttonText ? (
        <a className="serviceItemCardBtn" href={buttonLink}>
          {buttonText}
        </a>
      ) : null}
    </div>
  )
}
ServiceItemCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: propTypes.string,
}
