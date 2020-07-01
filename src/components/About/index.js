import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'

const About = ({title, mainText, sideComponent}) => {
  return (
    <div className="about-component">
      <Container>
        <Row>
          <Col>
            <h1 className="title">{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <p className="about-text">{mainText}</p>
          </Col>
          <Col lg={5}>
            {sideComponent}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

About.propTypes = {
  title: PropTypes.string,
  mainText: PropTypes.string,
  sideComponent: PropTypes.object
}

export default About