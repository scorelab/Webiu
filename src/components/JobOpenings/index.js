import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'

export const JobOpenings = ({title, openings}) => {
  return (
    <div className="job-openings-container-component">
      <Container>
        {!title || (
          <Row>
            <Col>
              <h1 className="title">{title}</h1>
            </Col>
          </Row>
        )}
        {!openings || (
          <Row>
            {openings ? openings.map((opening, i) => (
              <Col key={i}>
                <h5>{opening.title}</h5>
                <p>{opening.description}</p>
                <ul>
                  {opening.skillRequirements.map((skill, i) => (
                    <li key={`${skill}-${i}`}>{skill}</li>
                  ))}
                </ul>
              </Col>
            )) : null}
          </Row>
        )}
      </Container>
    </div>
  )
}

JobOpenings.propTypes = {
  title: PropTypes.string,
  openings: PropTypes.array,
}
