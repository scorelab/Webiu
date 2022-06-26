import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  decoratedHeader: {
    ...theme.typography.h1,
    color: theme.palette.primary.main,
  },
  iconStyle: {
    color: theme.palette.primary.main,
    padding: "0 15px",
  },
  tabsStyle: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  tabStyle: {
    width: 120,
    minWidth: 120,
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  drawerStyle: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemTextStyle: {
    color: theme.palette.primary.light,
  },
}))

export default Styles

// import React from "react"
// import { makeStyles } from "@material-ui/core/styles"

// const Styles = makeStyles(theme => ({
//   decoratedHeader: {
//     fontSize: 32,
//     fontFamily: "Inter",
//     fontStyle: "italic",
//     fontWeight: "bold",
//     color: "#47b3a3",
//   },
//   iconStyle: {
//     color: "#47b3a3",
//     padding: "0 15px",
//   },
//   tabsStyle: {
//     marginLeft: "auto",
//     marginRight: "auto",
//   },
//   tabStyle: {
//     width: 120,
//     minWidth: 120,
//   },
//   logoContainer: {
//     [theme.breakpoints.down("md")]: {
//       marginRight: "auto",
//     },
//   },
//   drawerStyle: {
//     backgroundColor: "#47b3a3",
//   },
//   listItemTextStyle: {
//     color: "#fff",
//   },
// }))

// export default Styles
