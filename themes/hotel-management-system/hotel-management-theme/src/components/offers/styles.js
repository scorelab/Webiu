import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  headerStyle: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  decoratedHeader: {
    ...theme.typography.h3,
    color: theme.palette.primary.main,
  },
  itemContainer: {
    width: "80%",
    "& > *": {
      marginRight: "calc((100% - (200px * 4))/3)",
      marginBottom: "40px",
    },
    "& > :nth-child(4n)": {
      marginRight: 0,
    },
  },
}))

export default Styles
