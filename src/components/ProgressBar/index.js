import React from "react";
import PropTypes from "prop-types";
import Progress from "./Bar"
import "./style.sass"

export const ProgressBar = ({ data, colWidth, colHeight }) => {
  return (
      <div>
            {data.map((item, idx) => (
                <Progress 
                   key={idx} 
                   bgcolor={item.bgcolor} 
                   completed={item.completed} 
                   colWidth={colWidth} 
                   colHeight={colHeight}
                   text={item.text} />
            ))}
      </div>
  );
};

ProgressBar.propTypes = {
    data: PropTypes.array,
    colWidth: PropTypes.string,
    colHeight: PropTypes.string
}