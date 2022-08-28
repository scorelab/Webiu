import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const Header = ({ brandName }) => {
  const classes = Styles()
  return (
    <AppBar position="fixed" classes={{ root: classes.appBarStyle }}>
      <Toolbar>
        <Typography variant="h1" classes={{ root: classes.headerTextStyle }}>
          {brandName}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
