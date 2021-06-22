import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad } from '@fortawesome/free-solid-svg-icons';

export const Timeline = ({data, header, height}) =>  {
  const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time><span className="data-time">{data.date}</span></time>
            <p className="data-text">{data.text}</p>
            {data.link && (
                <a
                    className="data-link"
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
  );
  
  return (
    <div className="timeline-container"  style={{maxHeight: height}}>
            {header ? <div className="header-component">
                <h2 className="title"><FontAwesomeIcon className="icon" icon={faRoad} /> {header}</h2>
            </div> : null}
            {data && data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
    </div>
  );
}

Timeline.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  height: PropTypes.string
}