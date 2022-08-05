import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  featureText: {
    ...theme.typography.h2,
    color: theme.palette.common.tomato,
  },
  chooseUsText: {
    ...theme.typography.h2,
    color: theme.palette.primary.dark,
    fontWeight: "bold",
  },
  cardTitle: {
    ...theme.typography.h2,
    color: theme.palette.primary.light,
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardText: {
    ...theme.typography.h3,
    color: theme.palette.primary.light,
    marginBottom: "10px",
  },
  container: {
    width: "100%",
    padding: "50px 20px 20px 20px",
  },
  space: {
    marginBottom: "20px",
  },
  cardContainer: {
    width: "80%",
    backgroundColor: theme.palette.common.tomato,
    padding: "10px",
    marginBottom: "10px",
  },
  icon: {
    marginTop: "-100px",
  },
}))

export default Styles
