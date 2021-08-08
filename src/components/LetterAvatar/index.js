import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const LetterAvatar = ({name, bgColor}) => {
  const backColor = bgColor ? bgColor : "#51ad28";
  return (
    <div className="letter-avatar-component">
      <div className="letter-avatar-container" style={{backgroundColor: backColor}}>
        {!name || (
          <span className="letter-avatar-text">{name.slice(0,1).toUpperCase()}</span>
        )}
      </div>
    </div>
  )
}

LetterAvatar.propTypes = {
  name: PropTypes.string,
  bgColor: PropTypes.string
}
