import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Col} from 'react-bootstrap'
import {navigate} from "gatsby"

const ProjectListItem = ({title, description, image, slug}) => {
  return (
    <Col md={4}>
      <div className="project-list-item-component" onClick={() => navigate(slug)}>
        <img className= "image" alt="project" src={image} />
        <div>
          <p className= "item-title"> {title}</p>
          <p className= "item-descriptiom">
            {description.slice(0, 220).trim()}
            {description.length > 220 ? "..." : ""}
          </p>
        </div>
      </div>
    </Col>
  )
}

ProjectListItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default ProjectListItem