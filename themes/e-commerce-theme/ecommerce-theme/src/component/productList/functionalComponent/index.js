import React from "react"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { faFilter, faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "./styles"
import Sort from "../sort"
import Filter from "../filter"

const FunctionalComponent = ({
  filterOptions,
  setFilterOptions,
  sortOptions,
  setSortOptions,
  option,
  setOption,
}) => {
  const classes = Styles()
  const content = () => {
    switch (option) {
      case "sort":
        return <Sort sortOptions={sortOptions} setOption={setOption} />
      case "filter":
        return <Filter filterOptions={filterOptions} setOption={setOption} />
      default:
        const items = [
          { icon: faFilter, alt: "filter" },
          { icon: faArrowUpWideShort, alt: "sort" },
        ]
        return (
          <Grid item container justify="space-around" alignItems="center">
            {items.map(item => (
              <Grid item key={item.alt}>
                <IconButton onClick={() => setOption(item.alt)}>
                  <FontAwesomeIcon icon={item.icon} size="1x" inverse />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        )
    }
  }
  return (
    <Grid item container classes={{ root: classes.functionContainer }}>
      {content()}
    </Grid>
  )
}

export default FunctionalComponent
