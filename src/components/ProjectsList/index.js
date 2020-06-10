import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import ProjectListItem from './ProjectListItem'
import {Link} from "gatsby"

const ProjectsList = ({title, items=[], limit}) => {
  return (
    <div className="project-list-component">
      <Container>
        <Row>
          <Col>
            <h1 className="title">{title}</h1>
          </Col>
        </Row>
        <Row>
          {items.map(item => (
            <ProjectListItem
              {...item}
            />
          ))}
        </Row>
        <Row>
          <Col>
            <Link to={'/projects'} className="btn">View All</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ProjectsList.propTypes = {
  items: PropTypes.array,
}

export default ProjectsList