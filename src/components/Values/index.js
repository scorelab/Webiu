import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const Values = ({ title, image, data }) => {
  return (
    <div className="header-wrapper">
      <Container>
        <Row>
          <Col md={6} className="left-col">
            <div>
              <h1 className="valuesTitle">{title}</h1>
              <div>
                {data &&
                  data.map((data, index) => {
                    return (
                      <div key={index}>
                        <p className="valueList">{`\u2015 ${data.list}`}</p>
                      </div>
                    )
                  })}
              </div>
            </div>
          </Col>
          <Col md={6} className="right-col">
            <img className="mainImage" alt="values" src={image} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Values.propTypes = {
  mainText: PropTypes.string,
  data: PropTypes.array,
  image: PropTypes.string,
}
