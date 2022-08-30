import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const HeroSectionThemeFour = ({
  mainText,
  subText,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <div
      className="heroFourWrapper"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="heroFourDiv">
        <div>
          <p className="heroFourMainText">{mainText}</p>
          <p className="heroFourSubText">{subText}</p>
          {buttonText ? (
            <a href={buttonLink}>
              <button className="heroFourBtn">{buttonText}</button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

HeroSectionThemeFour.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
}
