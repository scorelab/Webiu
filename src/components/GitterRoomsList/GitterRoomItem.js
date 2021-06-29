import React from "react"
import PropTypes from "prop-types"
import {withPrefix} from 'gatsby'
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const GitterRoomItem = ({name, avatarUrl, roomUrl, userCount, visible}) => {
  return (
    <div className="gitter-room-list-item-component" aria-hidden="true" onClick={() => window.open(roomUrl, "_blank")}>
      <img className="image" alt="Avatar" src={avatarUrl && avatarUrl !== ""  ? avatarUrl : withPrefix('/images/gitterPlaceholder.png')} />
      <div>
        <p className="gitter-room-name">{name}</p>
        <p className="gitter-room-members">
          <FontAwesomeIcon icon={faUser} /> {userCount} Members
        </p>
        {visible ? <p className="gitter-room-members">
          Public IRC
        </p> : null}
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