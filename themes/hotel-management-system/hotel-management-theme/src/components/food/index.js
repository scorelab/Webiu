import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import FoodCard from "./foodCard"
import Styles from "./styles"
import FoodList from "../../../assets/data/foodList"

const FoodPageComponent = () => {
  const foodItems = FoodList.map(item => (
    <Grid item key={item.id}>
      <FoodCard
        imgUrl={item.imgUrl}
        title={item.title}
        description={item.description}
        price={item.price}
        availability={item.availability}
      />
    </Grid>
  ))
  const classes = Styles()
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item classes={{ root: classes.headerStyle }}>
        <Typography variant="h3" align="center">
          Food &<span className={classes.decoratedHeader}> Beverages</span>
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        classes={{ root: classes.itemContainer }}
      >
        {foodItems}
      </Grid>
    </Grid>
  )
}

export default FoodPageComponent
