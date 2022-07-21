import React, { useContext, useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import IconButton from "@material-ui/core/IconButton"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "gatsby"
import Styles from "./styles"

const NavBarWithIcons = ({ firstName, tabList, btnList }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = Styles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("sm"))
  const activeIndex = () => {
    const filter = tabList.filter(
      category =>
        category.route === "/" + window.location.pathname.split("/", 2)[1]
    )
    const index = tabList.indexOf(filter[0])
    return index
  }
  const tabs = (
    <Tabs
      value={activeIndex() !== -1 ? activeIndex() : false}
      indicatorColor="primary"
      textColor="primary"
      classes={{ root: classes.tabsStyle }}
    >
      {tabList.map(category => (
        <Tab
          component={Link}
          to={category.route}
          label={category.name}
          key={category.id}
          classes={{ root: classes.tabStyle }}
        />
      ))}
    </Tabs>
  )

  const btnGroup = btnList.map(iconObject => (
    <Button
      component={Link}
      to={iconObject.route}
      key={iconObject.id}
      classes={{ root: classes.btnStyle }}
    >
      <Typography variant="h4">{iconObject.name}</Typography>
    </Button>
  ))
  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      classes={{ paper: classes.drawerStyle }}
    >
      <List disablePadding>
        {tabList.map((category, i) => (
          <ListItem
            selected={activeIndex() === i}
            component={Link}
            to={category.route}
            divider
            button
            key={category.id}
          >
            <ListItemText
              classes={{ primary: classes.listItemTextStyle }}
              primary={category.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Button
          classes={{ root: classes.logoContainer }}
          component={Link}
          to="/"
        >
          <Typography variant="h1">{firstName}</Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        {matchesMD ? (
          <IconButton
            classes={{ root: classes.iconStyle }}
            onClick={() => setDrawerOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} size="1x" />
          </IconButton>
        ) : (
          btnGroup
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBarWithIcons
