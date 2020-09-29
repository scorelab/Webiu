import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import ProjectListItem from './ProjectListItem'
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ProjectsList = ({title, items=[], limit, suffle = false}) => {
  const suffledItems = suffle ? items.sort(() => Math.random() - 0.5) : items

  return (
    <div className="project-list-component">
      <Container>
        {!title || (
          <Row>
            <Col>
              <h1 className="title">{title}</h1>
            </Col>
          </Row>
        )}
        <Row>
          {suffledItems.map((item, i) => !limit || i < limit ? (
            <ProjectListItem
              key={i}
              {...item}
            />
          ) : null)}
        </Row>
        <Row>
          <Col className="view-all-btn-container">
            {!limit || <Link to={'/projects'} className="btn">Many More <FontAwesomeIcon icon={faArrowRight}/></Link>}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ProjectsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  limit: PropTypes.number,
  suffle: PropTypes.bool,
}