import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

export const Announcements = ({data, header, direction, speed}) =>  { 
  
  const [scrollAmount, setScrollAmount] = useState(speed);

  return (
    <div className="announcements-section">
       {header ? <div className="header-component">
            <h2 className="title">
              <FontAwesomeIcon className="icon" icon={faBullhorn} /> {header}
            </h2>
        </div> : null} 
        <div className="marquee-div">
          <div className="marquee-heading">
            <p className="marquee-para">Annoucements</p>
          </div>
          <div className="marquee-main">
            <marquee direction={direction} scrollAmount={scrollAmount}>
                {data ? data.map((item, index) => (
                    <div key={index}>                
                        <a href={item.link} className="marquee-anchor">
                            <p>{item.text}</p>
                        </a>
                    </div>
                )) : null}
            </marquee>
          </div>           
        </div>
    </div>
  );
}

Announcements.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  direction: PropTypes.string,
  speed: PropTypes.string
}