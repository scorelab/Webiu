import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { ServicesCard } from "../ServicesCard"
import { Container, Row, Col } from "react-bootstrap"

export const ServicesCardGrid = ({
  data,
  serviceHeading,
  serviceDescription,
}) => {
  return (
    <Container>
      <Row>
        <Col md={6} className="service-left-col">
          <h1 className="service-heading-left">{serviceHeading}</h1>
        </Col>
        <Col md={6} className="service-right-col">
          <p className="service-para-left">{serviceDescription}</p>
        </Col>
      </Row>
      <Row>
        <Col className="card-col">
          {data &&
            data.map((data, index) => {
              return (
                <div key={index}>
                  <ServicesCard
                    image={data.imageOne}
                    title={data.titleOne}
                    description={data.descriptionOne}
                  />
                </div>
              )
            })}
        </Col>
      </Row>
    </Container>
  )
}
ServicesCardGrid.propTypes = {
  data: PropTypes.array,
  serviceHeading: PropTypes.string,
  serviceDescription: PropTypes.string,
}
