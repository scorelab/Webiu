import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Col} from 'react-bootstrap'
import {navigate} from "gatsby"

const PublicationListItem = ({title, conference, authors, slug}) => {
  return (
    <Col md={6}>
      <div className="publications-list-item-component" onClick={() => window.open(slug, "_blank")}>
        <div>
          <p className="item-title">{title}</p>
          <hr />
          <p className="item-conference">{conference}</p>
          <p className="item-authors">{authors.join(", ")}</p>
        </div>
      </div>
    </Col>
  )
}

PublicationListItem.propTypes = {
  title: PropTypes.string,
  conference: PropTypes.string,
  authors: PropTypes.array,
  slug: PropTypes.string,
}

export default PublicationListItem