import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import bannerBg from "../../../../assets/image/homePageBanner.svg"

const Styles = makeStyles(theme => ({
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${bannerBg})`,
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: 600,
      padding: "0px 0px 0px 200px ",
    },
    backgroundImage: `url(${bannerBg})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: 600,
    padding: "0px 100px 100px 400px ",
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      width: 100,
      paddingTop: 0,
    },
    width: 400,
    paddingTop: 200,
  },
  btnStyle: {
    margin: 10,
  },
  btnTextStyle: {
    textTransform: "none",
    margin: 10,
  },
}))

export default Styles
