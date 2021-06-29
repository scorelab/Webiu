import React from "react"
import PropTypes from "prop-types"
import {withPrefix} from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'
import "./style.sass"
import {ImageGrid} from "../ImageGrid"
import {LinksList} from "../LinksList"

export const ProjectDetail = ({project}) => {
  return (
    <div className="project-detail-component">
      <div className="project-detail-header-container" style={{ backgroundImage: `url(${withPrefix('/images/dots.png')})` }}>
        <img alt="Logo" src={withPrefix(project.image)} />
        <h1>{project.title}</h1>
      </div>
      <Container>
          <Row>
            <Col className="project-detail-section-container" >
              <h3>Description</h3>
              <p>{project.description}</p>
              {project.screenshots ? <h3>Screen Shots</h3> : null}
              {project.screenshots ? <ImageGrid images={project.screenshots} /> : null}
              {project.links ? <h3>Contribute</h3> : null}
              {project.links ? <LinksList 
                links={project.links}
              /> : null}
            </Col>
          </Row>
      </Container>
      <br />
    </div>
  )
}


ProjectDetail.propTypes = {
  project: PropTypes.object
}
