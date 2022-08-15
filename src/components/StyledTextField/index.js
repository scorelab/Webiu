import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Styles from "./styles"

const StyledTextField = ({ title, placeholder, value, onChangeHandler }) => {
  const classes = Styles()
  return (
    <Grid item container direction="row" classes={{ root: classes.rowWrapper }}>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item>
          <TextField
            placeholder={placeholder}
            InputProps={{
              classes: { input: classes.inputStyle },
            }}
            classes={{ root: classes.underlineStyle }}
            value={value}
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

StyledTextField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func,
  onChangeHandler: PropTypes.array,
}

export default StyledTextField
