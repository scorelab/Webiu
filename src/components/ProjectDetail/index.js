import React from "react"
import PropTypes from "prop-types"
import {Container, Row, Col} from 'react-bootstrap'
import ImageGrid from "../ImageGrid"
import "./style.sass"
import LinksList from "../LinksList"

const ProjectDetail = ({project}) => {
  return (
    <div className="project-detail-component">
      <div className="project-detail-header-container" >
        <img alt="Logo" src={project.image} />
        <h1>{project.title}</h1>
      </div>
      <Container>
          <Row>
            <Col className="project-detail-section-container" >
              <h3>Description</h3>
              <p>{project.description}</p>
              <h3>Screen Shots</h3>
              <ImageGrid images={project.screenshots} />
              <h3>Contribute</h3>
              <LinksList 
                links={project.links}
              />
            </Col>
          </Row>
      </Container>
    </div>
  )
}


ProjectDetail.propTypes = {
  project: PropTypes.object
}

export default ProjectDetail