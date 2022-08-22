import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import FoodCard from "./foodCard"
import SelectComponent from "./select"
import Styles from "./styles"
import FoodList from "../../../assets/data/foodList"
import FoodTypes from "../../../assets/data/foodTypes"

const FoodPageComponent = () => {
  const [type, setType] = useState("")

  const handleChange = event => {
    setType(event.target.value)
  }

  const foodItems =
    type === ""
      ? FoodList.map(item => (
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
      : FoodList.filter(ele => ele.type === type).map(item => (
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
      <Grid item classes={{ root: classes.slectStyle }}>
        <SelectComponent
          title="Type"
          value={type}
          onChangeHandler={handleChange}
          dataList={FoodTypes}
        />
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
