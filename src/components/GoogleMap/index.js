import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const GoogleMap = ({ mapId, header, width, height }) => {
    return (
       <div>
           {header ? <div className="header-component">
                <h2><FontAwesomeIcon className="icon-h2" icon={faMapMarkerAlt} /> <span className="h2-title">{header}</span></h2>
           </div> : null}
           <div className="map-component" style={{width: width, height: height}}>
            <iframe
                src={`https://www.google.com/maps/embed?${mapId}`}
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                />
            </div>
       </div>
    )
}

GoogleMap.propTypes = {
    mapId: PropTypes.string,
    header: PropTypes.string
}