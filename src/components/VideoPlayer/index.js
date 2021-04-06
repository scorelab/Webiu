import React from "react"
import PropTypes from "prop-types"
import { Col } from "react-bootstrap"
import "./style.sass"


export const VideoPlayer = ({ videoSrcURL, title }) => {

  return (
    <div className="videoplayer-main-component" style={{ backgroundImage: 'url(./images/dots.png)' }}>
      {title ? <Col md={12}>
        <h1 className="videoplayer-main-component-title">{title}</h1>
      </Col> : null}
      <center>
        {videoSrcURL ? <div className="embed-responsive embed-responsive-21by9">
          <iframe className="embed-responsive-item" src={videoSrcURL} allowFullScreen></iframe>
        </div> : null}
      </center>
    </div>
  )
}

VideoPlayer.propTypes = {
  videoSrcURL: PropTypes.string,
  title: PropTypes.string
}
