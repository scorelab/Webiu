import React from "react"
import PropTypes from "prop-types"
import { Row, Col} from 'react-bootstrap'
import "./style.sass"

export const TrustedBy = ({ data, title, description, column }) => {
  return (
    <div className="trusted-by">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="logo-div">
          <Row className="trusted-div">
              {data && data.map((data, index) => (
                  <Col md={column} key={index} className="org-logo">
                    <img src={data.img} alt="logo" className="trust-logo" />
                    <p className="description">{data.text}</p>
                  </Col>
              ))}
          </Row>
      </div>
    </div>
  )
}

TrustedBy.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  coloumn: PropTypes.string
}