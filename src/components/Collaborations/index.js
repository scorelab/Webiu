import React from "react"
import PropTypes from "prop-types"
import { Row, Col} from 'react-bootstrap'
import "./style.sass"

export const Collaborations = ({ data, title, description, column }) => {
  return (
    <div className="comp-wrap">
      <h2 className="collab-title">{title}</h2>
      <p className="collab-description">{description}</p>
      <div className="logo-div">
          <Row className="collab-div">
              {data && data.map((data, index) => (
                  <Col md={column} key={index} className="org-logo">
                    <img src={data.img} alt="logo" className="collab-logo" />
                    <p className="collab-name">{data.text}</p>
                  </Col>
              ))}
          </Row>
      </div>
    </div>
  )
}

Collaborations.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  column: PropTypes.string
}