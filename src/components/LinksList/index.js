import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

const LinksList = ({links}) => {
  return (
    <div className="links-list-component">
      <ul>
        {!links|| links.map((link, i) => (
          <li key={`${link.url}-${i}`}>
            <span>{link.name}</span>: <a href={link.url}>{link.url}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

LinksList.propTypes = {
  links: PropTypes.array,
}

export default LinksList