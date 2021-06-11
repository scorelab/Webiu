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
        {openings && openings.length >=1 ? (
          <Row>
            {openings.map((opening, i) => (
              <Col key={i}>
                <h5>
                  {opening.title} <a style={{position: "absolute", right: "20px"}} href={opening.applyLink} target="_blank" rel="noreferrer">Apply here</a> 
                </h5>
                <p>{opening.description}</p>
                <ul>
                  {opening.skillRequirements.map((skill, i) => (
                    <li key={`${skill}-${i}`}>{skill}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        ) : <Col>
              <p>Thanks for showing interest in working with us! Stay tuned for more opportunity updates</p>
            </Col>} 
      </Container>
    </div>
  )
}

JobOpenings.propTypes = {
  title: PropTypes.string,
  openings: PropTypes.array,
}
