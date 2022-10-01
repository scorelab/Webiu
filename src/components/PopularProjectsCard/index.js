import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Button } from "react-bootstrap"

export const PopularProjectsCard = ({
  image,
  description,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className="popularProjectCardWrap">
      <img src={image} className="popularProjectCardImage" alt="logo" />
      <p className="popularProjectCardDescription">{description}</p>
      {buttonText ? (
        <a href={buttonLink}>
          <Button className="popularProjectCardButton">{buttonText}</Button>
        </a>
      ) : null}
    </div>
  )
}
PopularProjectsCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}
