import React from "react"
import PropTypes from "prop-types"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Styles from "./styles"

const VerticalStepper = ({ activeStep, stepsList, onClickStepHandler }) => {
  const classes = Styles()
  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      classes={{ root: classes.container }}
    >
      {stepsList.map((step, index) => {
        return (
          <Step
            key={step.name}
            classes={{
              root: classes.stepWrapper,
            }}
          >
            <StepLabel
              StepIconProps={{
                classes: {
                  root: classes.stepWrapper,
                  completed: classes.completed,
                  active: classes.active,
                  disabled: classes.disabled,
                },
              }}
              classes={{
                label: classes.stepperLabel,
                root: classes.stepperLabel,
                completed: classes.completedText,
                active: classes.activeText,
                disabled: classes.disabledText,
              }}
              onClick={onClickStepHandler}
            >
              {step.name}
            </StepLabel>
          </Step>
        )
      })}
    </Stepper>
  )
}

VerticalStepper.propTypes = {
  activeStep: PropTypes.number,
  stepsList: PropTypes.array,
  onClickStepHandler: PropTypes.func,
}

export default VerticalStepper
