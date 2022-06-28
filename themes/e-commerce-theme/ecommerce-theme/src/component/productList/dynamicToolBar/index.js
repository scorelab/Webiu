import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import FunctionalComponent from "../functionalComponent"
import Styles from "./styles"
import DescriptionContainer from "../descriptionContainer"

const DynamicToolBar = ({
  filterOptions,
  setFilterOptions,
  name,
  sortOptions,
  setSortOptions,
}) => {
  const [option, setOption] = useState(null)
  const classes = Styles()
  const sortOptionsList = [
    { label: "A-Z", active: true },
    { label: "Z-A", active: false },
    { label: "NEWEST", active: false },
    { label: "OLDEST", active: false },
    { label: "PRICE ↑", active: false },
    { label: "PRICE ↓", active: false },
  ]
  const filterOptionList = [
    { label: "Women's casual", checked: true },
    { label: "Women's frock", checked: false },
    { label: "Women's gown", checked: false },
    { label: "Women's lehanga", checked: false },
    { label: "Women's short", checked: false },
  ]
  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.toolBar }}
      >
        <FunctionalComponent
          option={option}
          setOption={setOption}
          sortOptions={sortOptionsList}
          filterOptions={filterOptionList}
        />
        <DescriptionContainer categoryName="Women" />
      </Grid>
    </Grid>
  )
}

export default DynamicToolBar
