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
import Badge from "@material-ui/core/Badge"
import { Link } from "gatsby"
import Styles from "./styles"
import { CartContext } from "../../contexts"

const NavBarWithIcons = ({ firstName, secondName, categories, iconList }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { cart } = useContext(CartContext)
  const classes = Styles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("sm"))
  console.log(window.location.pathname)
  const activeIndex = () => {
    const filter = categories.filter(
      category =>
        category.route === "/" + window.location.pathname.split("/", 2)[1]
    )
    const index = categories.indexOf(filter[0])
    return index
  }
  const tabs = (
    <Tabs value={activeIndex()} classes={{ root: classes.tabsStyle }}>
      {categories.map(category => (
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

  const iconSet = iconList.map(iconObject => (
    <IconButton
      key={iconObject.alt}
      component={Link}
      to={iconObject.link}
      classes={{ root: classes.iconStyle }}
    >
      {iconObject.alt === "cart" ? (
        <Badge
          overlap="circle"
          badgeContent={cart.length}
          classes={{ badge: classes.badge }}
        >
          <FontAwesomeIcon icon={iconObject.icon} size="1x" />
        </Badge>
      ) : (
        <FontAwesomeIcon icon={iconObject.icon} size="1x" />
      )}
    </IconButton>
  ))
  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      classes={{ paper: classes.drawerStyle }}
    >
      <List disablePadding>
        {categories.map((category, i) => (
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
          {firstName && (
            <Typography variant="h1">
              {firstName}
              {secondName && (
                <span className={classes.decoratedHeader}>{secondName}</span>
              )}
            </Typography>
          )}
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
          iconSet
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBarWithIcons
