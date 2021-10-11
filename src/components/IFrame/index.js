import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import "./style.sass"

export const Iframe = ({ src, title }) => {
  return (
    <div>
      <Container>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={src}
            title={title}
          ></iframe>
        </div>
      </Container>
    </div>
  )
}

Iframe.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
}
