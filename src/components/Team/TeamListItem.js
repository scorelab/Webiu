import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

const TeamMemberItem = ({name, title, image, horizontal}) => {
  return (
    <div className={horizontal ? 'team-member-item-component-horizontal' : 'team-member-item-component'}>
      <div>
        <p className="member-name"> {name}</p>
        <p className="member-title"> {title}</p>
      </div>
    </div>
  )
}

TeamMemberItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default TeamMemberItem