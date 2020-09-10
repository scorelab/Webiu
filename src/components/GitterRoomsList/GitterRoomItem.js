import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./style.sass"

const GitterRoomItem = ({name, avatarUrl, roomUrl, userCount}) => {
  return (
    <div className="gitter-room-list-item-component" onClick={() => window.open(roomUrl, "_blank")}>
      <img className="image" alt="Avatar" src={avatarUrl && avatarUrl !== ""  ? avatarUrl : './images/gitterPlaceholder.png'} />
      <div>
        <p className="gitter-room-name">{name}</p>
        <p className="gitter-room-members">
          {userCount} Members
        </p>
      </div>
    </div>
  )
}

GitterRoomItem.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  roomUrl: PropTypes.string,
  userCount: PropTypes.string,
}

export default GitterRoomItem