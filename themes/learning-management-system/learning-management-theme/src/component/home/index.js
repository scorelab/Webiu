import React from "react"
import Grid from "@material-ui/core/Grid"
import WelcomeContainer from "./welcomeContainer"
import StatisticsSection from "./statisticsSection"

const HomeContent = () => {
  return (
    <Grid container>
      <WelcomeContainer />
      <StatisticsSection />
    </Grid>
  )
}

export default HomeContent
