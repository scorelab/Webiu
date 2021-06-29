import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.sass"

export const Stepper = ({ steps, direction, currentStep = 1 }) => {
  const [stepState, setStepState] = useState([]);

  useEffect(() => {
    let createSteps = steps.map((step, idx) => ({
      description: step,
      completed: idx < currentStep - 1,
      selected: idx <= currentStep - 1,
      highlighted: idx === currentStep - 1,
    }));

    setStepState(createSteps);
  }, [steps, currentStep]);

  return (
    <div className={`stepper-container-${direction}`}>
      <div className={`stepper-wrapper-${direction}`}>
        {stepState.map(
          ({ selected, completed, highlighted, description }, idx) => (
            <div className="step-wrapper" key={idx}>
              <div
                className={`step-number step-number-${
                  selected ? "selected" : "disabled"
                }`}
              >
                {completed ? "✔" : idx + 1}
              </div>
              <div
                className={`step-description ${
                  highlighted ? "step-description-active" : ""
                }`}
              >
                {description}
              </div>
              {idx + 1 !== stepState.length && (
                <div
                  className={`divider-line divider-line-${stepState.length}`}
                ></div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

Stepper.propTypes = {
  direction: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
};