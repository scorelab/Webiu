import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

const LetterAvatar = ({name}) => {
  return (
    <div className="letter-avatar-component">
      <div className="letter-avatar-container">
        {!name || (
          <span className="letter-avatar-text">{name.slice(0,1)}</span>
        )}
      </div>
    </div>
  )
}

LetterAvatar.propTypes = {
  name: PropTypes.string,
}

export default LetterAvatar