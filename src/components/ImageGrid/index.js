import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Row, Col} from 'react-bootstrap'
import {withPrefix} from 'gatsby'

export const ImageGrid = ({size, images}) => {

  const renderImages = () => {
    return (
      <Row>
        {images.map(i => (
          <Col md={size === 'medium' ? 6 : 4} key={i}>
            <img alt="Logo" src={withPrefix(i)} />
          </Col>
        ))}
      </Row>
    )
  }

  return (
    <div className="image-grid-component">
      {images && images.length > 0 ? renderImages() : <p>No screen shots found!</p>}
    </div>
  )
}


ImageGrid.propTypes = {
  images: PropTypes.array
}
