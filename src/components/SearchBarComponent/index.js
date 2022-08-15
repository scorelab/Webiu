import React, { useState } from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const SearchBar = ({ handleSearch, placeHolder }) => {
  const classes = Styles()
  const [value, setValue] = useState("")
  return (
    <Grid>
      <TextField
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
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
        }}
      />
    </Grid>
  )
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  placeHolder: PropTypes.string,
}

export default SearchBar
