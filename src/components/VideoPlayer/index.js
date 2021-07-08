import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

export const VideoPlayer = ({ videoSrcURL, title, header, width, height }) => {

  return (
    <div>
      {header ? <div className="header-component">
            <h2 className="title">
              <FontAwesomeIcon className="icon" icon={faVideo} /> {header}
            </h2>
      </div> : null}
      <div className="videoplayer-component">
        {videoSrcURL ? 
            <iframe width={width} height={height}
                    src={videoSrcURL}
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
         : null}
         {title ? <p className="video-para">{title}</p> : null}
      </div>
    </div>
  )
}

VideoPlayer.propTypes = {
  videoSrcURL: PropTypes.string,
  title: PropTypes.string,
  header: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}