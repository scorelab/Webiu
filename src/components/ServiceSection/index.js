import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Row, Col, Container } from "react-bootstrap"

export const ServiceSection = ({
  subText,
  mainText,
  dataUpperGrid,
  dataLowerGrid,
}) => {
  return (
    <div className="ServiceSectionWrapper">
      <Container>
        <hr className="serviceDivider" />
        <p className="serviceSubText">{subText}</p>
        <p className="serviceMainHeading">{mainText}</p>
        <Row>
          {dataUpperGrid &&
            dataUpperGrid.map((dataUpperGrid, index) => {
              return (
                <Col>
                  <div key={index}>
                    <div class="sectionImage">
                      <img src={dataUpperGrid.subImage} />
                      <div>
                        <p className="SubSectionHeading">
                          {dataUpperGrid.subDataHeading}
                        </p>
                        <p className="SubSectionText">
                          {dataUpperGrid.subDataPara}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
        </Row>
        <Row>
          {dataLowerGrid &&
            dataLowerGrid.map((dataLowerGrid, index) => {
              return (
                <Col>
                  <div key={index}>
                    <div class="sectionImage">
                      <img src={dataLowerGrid.subImage} />
                      <div>
                        <p className="SubSectionHeading">
                          {dataLowerGrid.subDataHeading}
                        </p>
                        <p className="SubSectionText">
                          {dataLowerGrid.subDataPara}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}
ServiceSection.propTypes = {
  subText: PropTypes.string,
  mainText: PropTypes.string,
  dataUpperGrid: PropTypes.object,
  dataLowerGrid: PropTypes.object,
}
