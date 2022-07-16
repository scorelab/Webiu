import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"
import SolutionCard from "../solutionCard"

const SolutionSet = () => {
  const solutionCardList = [
    {
      id: 1,
      imageURL:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTUxNjM4NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      name: "Electrical",
    },
    {
      id: 2,
      imageURL:
        "https://images.unsplash.com/photo-1624352908259-ec0b31e421ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Nzk5NDE3NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      name: "Painting",
    },
    {
      id: 3,
      imageURL:
        "https://images.unsplash.com/photo-1645651964715-d200ce0939cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Nzk5NDMyNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      name: "Handiwork",
    },
    {
      id: 4,
      imageURL:
        "https://images.unsplash.com/photo-1553782097-130fef5d3e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Nzk5NjMzNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      name: "Driving",
    },
    {
      id: 5,
      imageURL:
        "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Nzk5NjQwMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      name: "Landscaping",
    },
    {
      id: 6,
      imageURL:
        "https://images.unsplash.com/photo-1542013936693-884638332954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MDEzMjg5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      name: "Plumbing",
    },
  ]

  const solutions = solutionCardList.map(ele => (
    <Grid item key={ele.id}>
      <SolutionCard imgURL={ele.imageURL} name={ele.name} />
    </Grid>
  ))
  const classes = Styles()
  return (
    <>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.container }}
      >
        <Typography variant="body1">What You Want To Get Done</Typography>
      </Grid>
      <Grid item container direction="row">
        {solutions}
      </Grid>
    </>
  )
}

export default SolutionSet
