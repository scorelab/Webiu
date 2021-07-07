import React from "react";
import "./style.sass"

const Progress = ({ bgcolor, completed, colWidth, colHeight, text }) => {
  return (
    <div className="">
        <p className="bar-para">{text}</p>
        <div className="bar-container" style={{height: colHeight, width: colWidth}}>
        <div className="bar-filler" style={{width: `${completed}%`, backgroundColor: bgcolor}}>
            <span className="bar-label">{`${completed}%`}</span>
        </div>
        </div>
    </div>
  );
}

export default Progress