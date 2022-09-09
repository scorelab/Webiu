import React from "react"
import Grid from "@material-ui/core/Grid"
import RatingsCard from "./ratingCard"
import RatingsList from "../../../assets/data/ratingsList"
import Styles from "./styles"

const RatingTemplate = () => {
  const classes = Styles()
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      classes={{ root: classes.container }}
    >
      {RatingsList.map((item, i) => (
        <RatingsCard
          imgUrl={item.imgUrl}
          userName={item.userName}
          experience={item.experience}
          ratingValue={item.ratingValue}
          details={item.details}
          key={i}
        />
      ))}
    </Grid>
  )
}

export default RatingTemplate
