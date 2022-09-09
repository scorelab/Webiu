import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  decoratedHeader: {
    ...theme.typography.h3,
    color: theme.palette.primary.main,
  },
  itemContainer: {
    width: "90%",
    "& > *": {
      marginRight: "calc((100% - (250px * 4))/3)",
      marginBottom: "40px",
    },
    "& > :nth-child(4n)": {
      marginRight: 0,
    },
  },
  headerStyle: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  selectStyle: {
    marginLeft: "-80%",
    marginBottom: "20px",
  },
}))

export default Styles
