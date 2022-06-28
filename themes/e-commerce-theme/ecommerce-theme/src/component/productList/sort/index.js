import React from "react"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Chip from "@material-ui/core/Chip"
import {
  faArrowUpWideShort,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import Styles from "./styles"

const Sort = ({ sortOptions, setSortOptions, setOption }) => {
  const classes = Styles()
  return (
    <Grid item container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <FontAwesomeIcon icon={faArrowUpWideShort} size="1x" inverse />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Grid container justifyContent="space-around" alignItems="center">
          {sortOptions.map((option, i) => (
            <Grid
              classes={{ root: classes.chipContainer }}
              item
              key={option.label}
            >
              <Chip
                label={option.label}
                onClick={() => {}}
                color={option.active !== true ? "primary" : "secondary"}
                classes={{
                  root: clsx({
                    [classes.notActive]: option.active !== true,
                  }),
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <FontAwesomeIcon icon={faCircleXmark} size="1x" inverse />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Sort
