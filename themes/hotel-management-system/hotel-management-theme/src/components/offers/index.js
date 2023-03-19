import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"
import FoodCard from "../food/foodCard"
import OffersList from "../../../assets/data/offersList"

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  
}));

const OffersTemplate = () => {
  const classes = Styles()

  const items = OffersList.map(item => (
    <Grid item xs={6} sm={4} md={3}  key={item.id}>
     <Item >
      <FoodCard
        imgUrl={item.imgUrl}
        title={item.title}
        description={item.description}
        price={item.price}
        availability={null}
      />
      </Item>
    </Grid>
  ))
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item classes={{ root: classes.headerStyle }}>
        <Typography variant="h3" align="center">
          Special<span className={classes.decoratedHeader}> Offers</span>
        </Typography>
      </Grid>

      <Box sx={{ flexGrow: 1 }}>
      <Grid
        // item
        // container
        // direction="row"
        // classes={{ root: classes.itemContainer }}
        container
        align="center"
        spacing={{ xs: 16, md: 8 }}
        columns={{ xs: 8, sm: 12, md: 12 }}
      >
        {items}
      </Grid>

      </Box>

    </Grid>
  )
}

export default OffersTemplate
