import React from "react"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Styles from "./styles"

const SelectComponent = ({ title, value, onChangeHandler, dataList }) => {
  const classes = Styles()

  const items = dataList.map(item => (
    <MenuItem
      value={item.type}
      classes={{ root: classes.menuItemStyle }}
      key={item.id}
    >
      {item.type}
    </MenuItem>
  ))

  return (
    <FormControl
      variant="outlined"
      style={{ minWidth: 100 }}
      size="small"
      classes={{ root: classes.customOutline }}
    >
      <InputLabel classes={{ root: classes.menuItemStyle }}>{title}</InputLabel>
      <Select
        value={value}
        label={title}
        onChange={onChangeHandler}
        classes={{ root: classes.menuItemStyle }}
      >
        {items}
      </Select>
    </FormControl>
  )
}

export default SelectComponent
