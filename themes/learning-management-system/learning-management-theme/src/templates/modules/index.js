import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Layout from "../../ui/layout"
import Styles from "./styles"

const Module = ({ pageContext }) => {
  const classes = Styles()

  const [activeStep, setActiveStep] = useState([])
  const [showSection, setShowSection] = useState(0)
  const [subSection, setSubSection] = useState([])

  useEffect(() => {
    const arr = []
    pageContext.submodules.forEach(element => {
      arr.push(0)
    })
    setActiveStep(arr)
    setSubSection(arr)
  }, [])

  const showHandler = index => {
    setShowSection(index)
  }

  const handleNext = index => {
    if (activeStep[index] < pageContext.submodules[index].subTitles.length) {
      const newStep = Object.assign([...activeStep], {
        [index]: activeStep[index] + 1,
      })
      setActiveStep(newStep)
    }
  }

  const modules = pageContext.submodules.map((item, i) => {
    return (
      <Grid
        item
        key={i}
        classes={{ root: classes.subModuleStyle }}
        onClick={() => showHandler(i)}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6">{item.name}</Typography>
          </Grid>
          {showSection === i && (
            <Grid item>
              <Stepper
                activeStep={activeStep[i]}
                orientation="vertical"
                classes={{ root: classes.container }}
              >
                {item.subTitles.map((step, index) => {
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
                        onClick={() => {
                          handleNext(i)
                          setSubSection(
                            Object.assign([...subSection], { [i]: index })
                          )
                        }}
                      >
                        {step.name}
                      </StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
            </Grid>
          )}
        </Grid>
      </Grid>
    )
  })
  return (
    <Layout>
      <Grid container direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            classes={{ root: classes.wrapper }}
          >
            <Grid item classes={{ root: classes.headerStyle }}>
              <Typography variant="h6">{pageContext.name}</Typography>
            </Grid>
            {modules}
            <Grid
              item
              classes={{
                root: classes.subModuleStyle,
              }}
              xs
            ></Grid>
          </Grid>
        </Grid>
        <Grid item xs classes={{ root: classes.btnContainer }}>
          {activeStep[showSection] === 0 || !activeStep[showSection] ? (
            <Button
              classes={{ root: classes.btnStyle }}
              onClick={() => {
                setActiveStep(
                  Object.assign([...activeStep], {
                    [showSection]: activeStep[showSection] + 1,
                  })
                )
              }}
            >
              Start
            </Button>
          ) : subSection[showSection] < activeStep[showSection] ? (
            <a>
              {
                pageContext.submodules[showSection].subTitles[
                  subSection[showSection]
                ].dataUrl
              }
            </a>
          ) : (
            <a>
              {
                pageContext.submodules[showSection].subTitles[
                  activeStep[showSection] - 1
                ].dataUrl
              }
            </a>
          )}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Module
