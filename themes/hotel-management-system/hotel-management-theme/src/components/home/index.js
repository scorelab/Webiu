import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextContainerWithBackgroundImage from "./textContainerWithBackgroundImage"
import Styles from "./styles"

const HomeContent = () => {
  const classes = Styles()
  return (
    <Grid container direction="column">
      <Grid item>
        <TextContainerWithBackgroundImage
          firstHeader="Cloud Hotel"
          secondHeader="#1 Hotlel & Restaurent Management Application"
          height="500px"
        />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          classes={{ root: classes.space }}
        >
          <Grid item>
            <Typography variant="h3">What we provide as</Typography>
          </Grid>
          <Grid item classes={{ root: classes.space }}>
            <Typography variant="h2">Cloud Hotel</Typography>
          </Grid>
          <Grid item>
            <Grid container classes={{ root: classes.container }}>
              <Typography align="center">
                Cloud Hotel offers ultimate comfort and luxury. This 4-storied
                hotel is a beautiful combination of tradition grandure and
                modern facilities. The 255 exclusive guest rooms are furnished
                with a range of modern amenities such as television and internet
                access.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              classes={{ root: classes.container }}
              justifyContent="space-evenly"
            >
              <Grid item>
                <Button classes={{ root: classes.btnStyle }}>
                  Visit Hotel
                </Button>
              </Grid>
              <Grid item>
                <Button classes={{ root: classes.btnStyle }}>
                  Visit Resturent
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeContent
