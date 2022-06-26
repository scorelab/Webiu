import React from "react"
import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
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
  { icon: faUser, link: "/user", alt: "user" },
]

const Layout = ({ children }) => {
  return (
    <>
      <Header
        firstName="Dress"
        secondName="Fit"
        iconList={iconList}
        categories={categories}
      />
      {children}
      <Footer
        contactNumber="0765432763"
        email="dressfit@xyz.io"
        facebookLink="https://www.facebook.com"
        twitterLink="https://www.twitter.com"
        instragramLink="https://www.instragram.com"
        privacyPolicyLink="/privacy"
      />
    </>
  )
}

export default Layout
