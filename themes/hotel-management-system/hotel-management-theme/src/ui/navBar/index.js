import React, { useState } from "react"
import { navigate } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faChevronLeft,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import Styles from "./styles"

const NavigationDrawer = ({
  navigationOptions,
  open,
  resturentOptions,
  hotelOptions,
  handleDrawerOpen,
  handleDrawerClose,
  backIconHandler,
  brandName,
}) => {
  const classes = Styles({ open })

  const listItems = navigationOptions.map(item => (
    <>
      <ListItem
        disablePadding
        key={item.id}
        classes={{ root: classes.listItemStyle, selected: classes.selected }}
        component={!item.other && Link}
        to={item.route}
      >
        {item.frontIcon && (
          <ListItemIcon>
            <FontAwesomeIcon icon={item.frontIcon} size="1x" inverse />
          </ListItemIcon>
        )}
        <ListItemText
          primary={<Typography variant="h4">{item.name}</Typography>}
        />
        {item.backIcon && (
          <ListItemIcon>
            <FontAwesomeIcon
              icon={item.backIcon}
              size="1x"
              inverse
              style={{ marginLeft: "40px" }}
              onClick={() => backIconHandler(item.id)}
            />
          </ListItemIcon>
        )}
      </ListItem>
      {item.id === "2" &&
        resturentOptions &&
        item.other.map(ele => (
          <ListItem
            disablePadding
            key={ele.id}
            classes={{ root: classes.subWrapper }}
            component={Link}
            to={ele.route}
          >
            <ListItemText
              primary={<Typography variant="h5">{ele.name}</Typography>}
            />
          </ListItem>
        ))}
      {item.id === "3" &&
        hotelOptions &&
        item.other.map(ele => (
          <ListItem
            disablePadding
            key={ele.id}
            classes={{ root: classes.subWrapper }}
            component={Link}
            to={ele.route}
          >
            <ListItemText
              primary={<Typography variant="h5">{ele.name}</Typography>}
            />
          </ListItem>
        ))}
    </>
  ))
  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        classes={{ root: classes.appBarStyle }}
      >
        <Toolbar>
          {!open && (
            <IconButton onClick={handleDrawerOpen}>
              <FontAwesomeIcon icon={faBars} size="1x" inverse />
            </IconButton>
          )}
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography
                variant="h1"
                classes={{ root: classes.headerTextStyle }}
              >
                {brandName}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => navigate("/login")}>
                <FontAwesomeIcon icon={faUserCircle} size="1x" inverse />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <Grid
          container
          direction="column"
          classes={{ root: classes.drawerStyle }}
        >
          <Grid item container direction="column" alignItems="flex-end">
            <Grid item>
              <IconButton onClick={handleDrawerClose}>
                <FontAwesomeIcon icon={faChevronLeft} size="1x" inverse />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Divider classes={{ root: classes.dividerStyle }} />
          </Grid>
          <Grid item>
            <List>{listItems}</List>
          </Grid>
        </Grid>
      </Drawer>
    </>
  )
}

export default NavigationDrawer
