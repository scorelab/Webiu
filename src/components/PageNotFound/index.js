import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Link } from "gatsby"

export const PageNotFound = ({ image, mainText, subText }) => {
  return (
    <div className="page-not-found-component">
      <div className="inner-container">
        <img src={image} alt='404'/>
          <h1>{mainText}</h1>
          <p>
            {subText} | Return to <Link to='/'>Home</Link> page
          </p>
      </div>
    </div>
  )
}

PageNotFound.propTypes = {
  image: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string,
}