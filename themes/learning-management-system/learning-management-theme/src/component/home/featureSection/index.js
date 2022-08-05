import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Icon from "@material-ui/core/Icon"
import educationImage from "../../../../assets/images/education.png"
import Styles from "./styles"

const FeatureSection = () => {
  const classes = Styles()
  const FeatureCard = ({ title, description }) => {
    return (
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.cardContainer }}
      >
        <Grid item container justifyContent="center">
          <Typography classes={{ root: classes.cardTitle }}>{title}</Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Typography classes={{ root: classes.cardText }}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid item container classes={{ root: classes.space }}>
        <Typography classes={{ root: classes.featureText }}>
          Best Features
        </Typography>
      </Grid>
      <Grid item container classes={{ root: classes.space }}>
        <Typography classes={{ root: classes.chooseUsText }}>
          Why choose us?
        </Typography>
      </Grid>
      <Grid item container direction="row">
        <Grid item>
          <FeatureCard
            title="Quality Teaching"
            description="Quality Teaching And High Achievement Rates With Our Experienced And Inspiring Tutors."
          />
          <FeatureCard
            title="Best Education Brands"
            description="Outstanding Advice, Guidance And Opportunities."
          />
          <FeatureCard
            title="Best Leadership Ideas"
            description="Teaching Turning Today’s Students Into Tomorrow’s Leaders."
          />
        </Grid>
        <Grid item xs classes={{ root: classes.icon }}>
          <Icon>
            <img
              src={educationImage}
              style={{ height: "100%", width: "100%" }}
            />
          </Icon>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FeatureSection
