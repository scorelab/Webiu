import React from "react"
import Grid from "@material-ui/core/Grid"
import WelcomeContainer from "./welcomeContainer"
import StatisticsSection from "./statisticsSection"
import FeatureSection from "./featureSection"

const HomeContent = () => {
  const statistics = [
    { name: "Groups", value: "30" },
    { name: "Teachers", value: "40+" },
    { name: "Students", value: "1k+" },
  ]
  const styledTitle = "Welcome "
  const title = "to UoM Institute"
  const firstPara =
    "Proudly present for the first time in Galle 'UOM Higher Education Institute', Sri Lanka's only one state of the art auditorium built with luxury, high technology and modern technology for the children of the future."
  const secondPara =
    "The UOM Higher Education Institute has been designed to be aesthetically pleasing in nature, both indoor and outdoor with modern amenities like Air-Conditioned auditorium."
  return (
    <Grid container>
      <WelcomeContainer
        styledTitle={styledTitle}
        title={title}
        firstPara={firstPara}
        secondPara={secondPara}
      />
      <StatisticsSection statistics={statistics} />
      <FeatureSection />
    </Grid>
  )
}

export default HomeContent
