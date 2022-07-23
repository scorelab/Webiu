import React from "react"
import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./header/index"
import Footer from "./footer/index"

const categories = [
  {
    id: 1,
    route: "/",
    name: "Home",
  },
  {
    id: 2,
    route: "/women",
    name: "Women",
  },
  {
    id: 3,
    route: "/men",
    name: "Men",
  },
  {
    id: 4,
    route: "/kids",
    name: "Baby & Kids",
  },
  {
    id: 5,
    route: "/accessories",
    name: "Accessories",
  },
]

const iconList = [
  { icon: faSearch, link: "/search", alt: "search" },
  { icon: faShoppingCart, link: "/cart", alt: "cart" },
  { icon: faUser, link: "/signin", alt: "user" },
]

const Styles = makeStyles(theme => ({
  cotainer: {
    minHeight: "100vh",
  },
  footerWrapper: {
    height: "100%",
  },
}))
const Layout = ({ children }) => {
  const classes = Styles()
  return (
    <Grid container direction="column" classes={{ root: classes.cotainer }}>
      <Grid item>
        <Header
          firstName="Dress"
          secondName="Fit"
          iconList={iconList}
          categories={categories}
        />
      </Grid>
      <Grid item>{children}</Grid>
      <Grid item xs>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          classes={{ root: classes.footerWrapper }}
        >
          <Grid item>
            <Footer
              contactNumber="0765432763"
              email="dressfit@xyz.io"
              facebookLink="https://www.facebook.com"
              twitterLink="https://www.twitter.com"
              instragramLink="https://www.instragram.com"
              privacyPolicyLink="/privacy"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Layout
