import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Row, Col, Container } from "react-bootstrap"
import { CardThemeFour } from "../CardThemeFour"

export const CardThemeFourGrid = ({ image, dataUpperGrid, dataLowerGrid }) => {
  return (
    <div
      className="cardThemeFourBackground"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="cardThemeGridWrapper">
        <Container>
          <Row>
            {dataUpperGrid &&
              dataUpperGrid.map((dataUpperGrid, index) => {
                return (
                  <Col key={index}>
                    <CardThemeFour
                      image={dataUpperGrid.image}
                      title={dataUpperGrid.title}
                      description={dataUpperGrid.description}
                    />
                  </Col>
                )
              })}
          </Row>
          <Row>
            {dataLowerGrid &&
              dataLowerGrid.map((dataLowerGrid, index) => {
                return (
                  <Col key={index}>
                    <CardThemeFour
                      image={dataLowerGrid.image}
                      title={dataLowerGrid.title}
                      description={dataLowerGrid.description}
                    />
                  </Col>
                )
              })}
          </Row>
        </Container>
      </div>
    </div>
  )
}
CardThemeFourGrid.propTypes = {
  image: PropTypes.string,
  dataUpperGrid: PropTypes.object,
  dataLowerGrid: PropTypes.object,
}
