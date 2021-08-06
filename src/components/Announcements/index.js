import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

export const Announcements = ({data, header, direction, speed, horizontal, title}) =>  { 
  
  const [scrollAmount, setScrollAmount] = useState(speed);

  return (
    <div className="announcements-section">
       {header ? <div className="header-component">
            <h2 className="title">
              <FontAwesomeIcon className="icon-h2" icon={faBullhorn} /> {header}
            </h2>
        </div> : null} 
        {!horizontal ? <div className="marquee-div">
          {title ? <div className="marquee-heading">
            <p className="marquee-para">{title}</p>
          </div> : null}
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
        </div> : null}
        {horizontal ? 
          <Container>
           <div className="horizontal-marquee">
             <marquee direction={direction} scrollAmount={scrollAmount}>
                {data ? data.map((item, id) => (
                  <div key={id}>
                    <a href={item.link} className="marquee-anchor">
                      <p>{item.text}</p>
                    </a>
                  </div>
                )) : null}
             </marquee>
           </div>
           </Container>
        : null}
    </div>
  );
}

Announcements.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  direction: PropTypes.string,
  speed: PropTypes.string,
  horizontal: PropTypes.bool,
  title: PropTypes.string
}