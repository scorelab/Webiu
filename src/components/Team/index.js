import React from "react"
import PropTypes from "prop-types"
import {Container, Row, Col} from 'react-bootstrap'
import TeamListItem from './TeamListItem'
import "./style.sass"

export const Team = ({ heads, contributors, researchers, alumni }) => {
  return (
    <div className="team-component">
      <Container>
        {!heads || (
          <div>
            <h3>Heads</h3>
            <Row>
              {heads.map((item, i) => (
                <Col md={6} key={i}>
                  <TeamListItem 
                    name={item.name}
                    title={item.title}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}
        <br />
        <h3>Contributors</h3>
        <Row>
          {contributors.map((item, i) => (
            <Col md={3} sm={4} key={i}>
              <TeamListItem 
                name={item.name}
                title={item.title}
                horizontal
              />
            </Col>
          ))}
        </Row>
        <br />
        <h3>Researchers</h3>
        <Row>
          {researchers.map((item, i) => (
            <Col md={4} sm={6} key={i}>
              <TeamListItem 
                name={item.name}
                title={item.title}
                horizontal
              />
            </Col>
          ))}
        </Row>
        <br />
        <h3>Alumni</h3>
        <Row>
          {alumni.map((item, i) => (
            <Col md={4} sm={6} key={i}>
              <TeamListItem 
                name={item.name}
                title={item.title}
                horizontal
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

Team.propTypes = {
  heads: PropTypes.array,
  researchers: PropTypes.array,
  alumni: PropTypes.array,
}
