import React from "react"
import ScrollToTop from "."
import Styles from "./styles"

const ScrollToTopBehaviour = () => {
  const classes = Styles()
  return (
    <div className={classes.container}>
      Scroll down the page and look at right corner of the screen. You can see
      the scroll to up button!!!
      <ScrollToTop />
    </div>
  )
}

export default ScrollToTopBehaviour
