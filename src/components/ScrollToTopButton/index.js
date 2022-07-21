import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import IconButton from "@material-ui/core/IconButton"
import Styles from "./styles"

const ScrollToTop = () => {
  const classes = Styles()
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        console.log("hiii")
        setShowScrollTopBtn(true)
      } else {
        setShowScrollTopBtn(false)
      }
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {showScrollTopBtn && (
        <IconButton onClick={scrollTop} classes={{ root: classes.btnStyle }}>
          <FontAwesomeIcon icon={faAngleDoubleUp} size="1x" />
        </IconButton>
      )}
    </>
  )
}

export default ScrollToTop
