import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./style.sass";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button 
        style={{backgroundColor: props.bgColor}} 
        className={`accordion ${setActive}`} 
        onClick={toggleAccordion}>
          <h4 style={{color: props.titleColor}} className="accordion__title">{props.title}</h4>
          <Chevron className={`${setRotate}`} width={10} fill={props.toggleColor ? props.bgColor : "#24598B"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;