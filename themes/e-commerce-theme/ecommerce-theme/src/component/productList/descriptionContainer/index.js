import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Styles from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faBorderAll } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

const DescriptionContainer = ({ categoryName, layout, setLayout }) => {
  const classes = Styles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("sm"))

  return (
    <Grid
      item
      container
      justifyContent={matchesMD ? "flex-start" : "center"}
      alignItems="center"
      classes={{ root: classes.main }}
    >
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography
          align="center"
          variant="h1"
          classes={{ root: classes.textStyle }}
          paragraph
          gutterBottom
        >
          {categoryName}
        </Typography>
        <Typography align="center" variant="h4">
          All in one place
        </Typography>
      </Grid>
      <Grid item classes={{ root: classes.buttonGroupStyle }}>
        <ButtonGroup>
          <Button
            onClick={() => {
              setLayout("list")
            }}
            classes={{
              outlined: clsx(classes.button, {
                [classes.selectedBtn]: layout === "list",
              }),
            }}
          >
            <FontAwesomeIcon
              icon={faList}
              size="2x"
              color={layout === "list" ? "#fff" : "#000"}
            />
          </Button>
          <Button
            onClick={() => {
              setLayout("grid")
            }}
            classes={{
              outlined: clsx(classes.button, {
                [classes.selectedBtn]: layout === "grid",
              }),
            }}
          >
            <FontAwesomeIcon
              icon={faBorderAll}
              size="2x"
              color={layout === "grid" ? "#fff" : "#000"}
            />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default DescriptionContainer
