import React from "react"
import CountUp from "react-countup"
import { Row, Col } from "react-bootstrap"
import "./style.sass"
import PropTypes from "prop-types"

export const CountUpComp = ({ countUpListData }) => {
  return (
    <Row className="countUpWrapper">
      {countUpListData &&
        countUpListData.map((countUpListData, index) => {
          return (
            <Col md={3} key={index} className="transactionDiv">
              <div className="countUpCol">
                <h2 className="countUpHeading">{countUpListData.text}</h2>
                <CountUp
                  CountUp
                  className="countup"
                  separator=","
                  decimal=","
                  duration={countUpListData.duration}
                  end={countUpListData.end}
                />
              </div>
            </Col>
          )
        })}
    </Row>
  )
}

CountUpComp.propTypes = {
  countUpListData: PropTypes.object,
}
