import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Col} from 'react-bootstrap'

const AchievementListItem = ({title, image, slug, description}) => {
  return (
    <Col md={6}>
      <div className="publications-list-item-component" onClick={() => window.open(slug, "_blank")}>
        <div>
          <div className="image-div">
            <img src={image} alt="logo" className="item-image" />
          </div>
          <h5 className="achievement-title">{title}</h5>
          <p className="achievement-desc">{description}</p>
        </div>
      </div>
    </Col>
  )
}

AchievementListItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
}

export default AchievementListItem