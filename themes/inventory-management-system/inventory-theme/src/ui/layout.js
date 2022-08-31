import React from "react"
import MiniDrawer from "./miniDrawer"
import { faFlask, faCartPlus, faClock } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const Layout = ({ children }) => {
  const classes = Styles()
  return (
    <>
      <MiniDrawer
        orgName="NetSuiteLabs"
        navList={[
          { id: "1", url: "/", name: "Laboratories", icon: faFlask },
          { id: "2", url: "/bucket", name: "My Bucket", icon: faCartPlus },
          { id: "3", url: "/borrowings", name: "Borrowings", icon: faClock },
        ]}
      />
      <div className={classes.container} />
      <div className={classes.wrapper}>{children}</div>
    </>
  )
}

export default Layout
