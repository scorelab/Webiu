import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { IndividualCard } from "../IndividualCard"
import { Container, Row, Col } from "react-bootstrap"

export const IndividualCardGrid = ({ data }) => {
  console.log(data.imageOne)
  return (
    <Container>
      <Row>
        <Col className="card-col">
          {data &&
            data.map((data, index) => {
              return (
                <div
                  key={index}
                  className={
                    data.index % 2 === 1 ? "with-class" : "no-class"
                  }
                >
                  <IndividualCard
                    image={data.imageOne}
                    iconImage={data.iconImageOne}
                    title={data.titleOne}
                    description={data.descriptionOne}
                    buttonText={data.buttonTextOne}
                    buttonLink={data.buttonLinkOne}
                  />
                </div>
              )
            })}
        </Col>
      </Row>
    </Container>
  )
}
IndividualCardGrid.propTypes = {
  data: PropTypes.array,
}
