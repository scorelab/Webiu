import React from "react"
import PropTypes from "prop-types"
import "./style.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const LinksList = ({links, isIcon}) => {

  return (
    <div className="links-list-component">
      {links ? (
        <ul>
          {links.map((link, i) => (
            <li key={`${link.url}-${i}`}>
              <span>{link.name}</span>:
              <a href={link.url}>{link.url} {isIcon ? <FontAwesomeIcon icon={faExternalLinkAlt} /> : null}</a>
            </li>
          ))}
        </ul>
      ) : <p>No links found!</p>}
     </div>
  )
}

LinksList.propTypes = {
  links: PropTypes.array,
  isIcon: PropTypes.bool,
}
