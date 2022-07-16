import React, { useRef } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"
import { Button } from "@material-ui/core"
import ScrollToTop from "./scrollToTop"
import SolutionSet from "./sollutionSet"
import HelperSection from "./helperSection"

const FindServiceTemplate = () => {
  const favourite = useRef(null)
  const contact = useRef(null)
  const classes = Styles()

  const scrollToSection = elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <>
      <ScrollToTop />
      <Grid container direction="column">
        <Grid item container direction="row" classes={{ root: classes.header }}>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                classes={{ root: classes.textContainer }}
              >
                <Typography variant="h4">Get It Done by Pros!</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                classes={{ root: classes.textContainer }}
                onClick={() => scrollToSection(favourite)}
              >
                <Typography variant="h4">Get Started</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => scrollToSection(contact)}
                classes={{ root: classes.textContainer }}
              >
                <Typography variant="h4">How it Works?</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          ref={favourite}
          classes={{ root: classes.favourite }}
        >
          <SolutionSet />
        </Grid>
        <Grid
          item
          container
          direction="row"
          ref={contact}
          classes={{ root: classes.contact }}
        >
          <HelperSection />
        </Grid>
      </Grid>
    </>
  )
}

export default FindServiceTemplate
