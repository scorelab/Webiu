import React from "react"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const StyledSelect = ({ title, value, onChangeHandler, dataList }) => {
  const classes = Styles()
  const items = dataList.map((item, i) => {
    return (
      <MenuItem value={item.value} key={i}>
        {item.key}
      </MenuItem>
    )
  })
  return (
    <Grid item container direction="row" classes={{ root: classes.rowWrapper }}>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item>
          <FormControl classes={{ root: classes.formControl }}>
            <InputLabel
              classes={{ root: classes.inputLabelRoot }}
              shrink={false}
            >
              {value === "" && title}
            </InputLabel>
            <Select
              variant="standard"
              className={classes.underline}
              classes={{ icon: classes.iconStyle }}
              disableUnderline
              value={value}
              onChange={onChangeHandler}
            >
              {items}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StyledSelect
