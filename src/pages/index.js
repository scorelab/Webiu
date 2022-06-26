import React from "react"
import NavBarWithIcons from "../components/NavBarWithIcons"
import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons"

const ExamplePage = () => {
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
  return (
    // <div
    //   style={{
    //     position: "absolute",
    //     textAlign: "center",
    //     left: "50%",
    //     top: "50%",
    //     transform: "translate(-50%, -50%)",
    //   }}
    // >
    //   <h3 style={{ lineHeight: "45px" }}>
    //     Start editing the 'pages/index.js' file to import and show component
    //   </h3>
    // </div>

    <NavBarWithIcons
      categories={categories}
      iconList={iconList}
      firstName="Dress"
      secondName="Fit"
      activeIndex={0}
    />
  )
}

export default ExamplePage
