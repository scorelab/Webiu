import React from "react"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { faFilter, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "./styles"
import FormGroup from "@material-ui/core/FormGroup"
import { Checkbox, FormControlLabel } from "@material-ui/core"

const Filter = ({ filterOptions, setFilterOptions, setOption }) => {
  const classes = Styles()

  const handleFilter = option => {
    const newFilterOptions = [...filterOptions]
    newFilterOptions[option].checked = !newFilterOptions[option].checked
    setFilterOptions(newFilterOptions)
  }
  return (
    <Grid
      item
      container
      justify="space-between"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <FontAwesomeIcon icon={faFilter} size="1x" inverse />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Grid
          container
          justify="space-around"
          classes={{ root: classes.optionsContainer }}
        >
          {filterOptions.map((option, i) => (
            <Grid item key={i}>
              <FormGroup>
                <FormControlLabel
                  classes={{ label: classes.checkbox }}
                  key={option.label}
                  label={option.label}
                  control={
                    <Checkbox
                      style={{ color: "#fff" }}
                      checked={option.checked}
                      name={option.label}
                      onChange={() => handleFilter(i)}
                    />
                  }
                />
              </FormGroup>
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

export default Filter
