import React, { useState } from "react"
import {
  faHome,
  faBurger,
  faChevronDown,
  faChevronUp,
  faHotel,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import NavigationDrawer from "./navBar"
import Styles from "./styles"
import Typography from "@material-ui/core/Typography"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [resturentOptions, setResturentOptions] = useState(false)
  const [hotelOptions, setHotelOptions] = useState(false)

  const classes = Styles({ open })

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const backIconHandler = id => {
    if (id === "2") {
      setResturentOptions(!resturentOptions)
    } else if (id === "3") {
      setHotelOptions(!hotelOptions)
    }
  }
  const navigationOptions = [
    { id: "1", name: "Home", frontIcon: faHome, route: "/" },
    {
      id: "2",
      name: "Resturent",
      frontIcon: faBurger,
      backIcon: resturentOptions ? faChevronUp : faChevronDown,
      other: [
        { id: "1", name: "Food & Beverages", route: "/foods" },
        { id: "2", name: "Special Offers", route: "/offers" },
        { id: "3", name: "Reserve Table", route: "/table" },
        { id: "4", name: "Reservation", route: "/reservation" },
      ],
    },
    {
      id: "3",
      name: "Hotel",
      frontIcon: faHotel,
      backIcon: hotelOptions ? faChevronUp : faChevronDown,
      other: [
        { id: "1", name: "Rooms", route: "/rooms" },
        { id: "2", name: "Book Now", route: "/booking" },
      ],
    },
    {
      id: "4",
      name: "Ratings & Reviews",
      frontIcon: faStar,
      route: "/ratings",
    },
  ]
  return (
    <>
      <NavigationDrawer
        navigationOptions={navigationOptions}
        open={open}
        resturentOptions={resturentOptions}
        hotelOptions={hotelOptions}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        backIconHandler={backIconHandler}
        brandName="Cloud Hotel"
      />

      <div className={classes.container} />
      <div className={classes.wrapper}>{children}</div>
    </>
  )
}

export default Layout
