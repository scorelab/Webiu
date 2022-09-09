import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"
import FoodCard from "../food/foodCard"
import OffersList from "../../../assets/data/offersList"

const OffersTemplate = () => {
  const classes = Styles()

  const items = OffersList.map(item => (
    <Grid item key={item.id}>
      <FoodCard
        imgUrl={item.imgUrl}
        title={item.title}
        description={item.description}
        price={item.price}
        availability={null}
      />
    </Grid>
  ))
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item classes={{ root: classes.headerStyle }}>
        <Typography variant="h3" align="center">
          Special<span className={classes.decoratedHeader}> Offers</span>
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        classes={{ root: classes.itemContainer }}
      >
        {items}
      </Grid>
    </Grid>
  )
}

export default OffersTemplate
