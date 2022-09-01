import React from "react"
import Header from "./header/index"

const tabList = [
  {
    id: 1,
    route: "/",
    name: "Home",
  },
  {
    id: 2,
    route: "/groups",
    name: "Groups",
  },
  {
    id: 3,
    route: "/reports",
    name: "Reports",
  },
  {
    id: 4,
    route: "/contactUs",
    name: "ContactUs",
  },
]

const iconNavigator = { id: 1, route: "/user" }

const Layout = ({ children }) => {
  return (
    <div>
      <Header tabList={tabList} iconNavigator={iconNavigator} />
      {children}
    </div>
  )
}

export default Layout
