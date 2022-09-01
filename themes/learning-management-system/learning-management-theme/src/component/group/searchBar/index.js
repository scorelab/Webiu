import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const SearchBar = ({ handleSearch, placeHolder, queryHandler, queryValue }) => {
  const classes = Styles()
  return (
    <Grid>
      <TextField
        value={queryValue}
        onChange={queryHandler}
        classes={{ root: classes.textField }}
        placeholder={placeHolder}
        type="text"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span className={classes.SearchAdornment}>
                <FontAwesomeIcon
                  icon={faSearch}
                  size="1x"
                  color="#9e9e9e"
                  onClick={handleSearch}
                />
              </span>
            </InputAdornment>
          ),
          classes: { notchedOutline: classes.notchedOutline },
        }}
      />
    </Grid>
  )
}

export default SearchBar
