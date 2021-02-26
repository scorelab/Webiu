import React from "react"
import PropTypes from "prop-types"
import {Container, Row, Col} from 'react-bootstrap'
import "./style.sass"

export const Timeline = ({data, header}) =>  {

  const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
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
      <div className="timeline-container">
            {header ? <div className="header-component"><h1 className="title">{header}</h1></div> : null}
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
      </div>
		);
}

Timeline.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array
}
