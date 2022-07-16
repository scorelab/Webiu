import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import FAQSection from "../faqSection"
import Styles from "./styles"

const HelperSection = () => {
  const classes = Styles()
  const [isShow, setIsShow] = useState({
    option1: false,
    option2: false,
    option3: false,
  })
  const onPressHandler = i => {
    const newState = { ...isShow, [`option${i}`]: !isShow[`option${i}`] }
    setIsShow(newState)
  }
  const FAQList = [
    {
      id: 1,
      title: "1. Select the work to be done",
      description:
        "Let us know what project you need help with and when you need it done. We will match you with right pros for job",
    },
    {
      id: 2,
      title: "2. Compare match pros",
      description:
        "Verify pro credentials, read reviews, ask questions, discuss availability, and request project estimation",
    },
    {
      id: 3,
      title: "3. Complete your project",
      description: "Hire the pro that's right for you and your budget",
    },
  ]
  const FAQSet = FAQList.map(ele => (
    <FAQSection
      key={ele.id}
      title={ele.title}
      description={ele.description}
      show={isShow[`option${ele.id}`]}
      setShowHandler={() => onPressHandler(ele.id)}
    />
  ))
  return (
    <>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.container }}
      >
        <Typography variant="body1">How It Works?</Typography>
      </Grid>
      <Grid item container direction="column">
        <Grid item>{FAQSet}</Grid>
      </Grid>
    </>
  )
}

export default HelperSection
