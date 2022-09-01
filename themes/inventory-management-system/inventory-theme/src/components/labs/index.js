import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import DropDown from "./dropDown"
import LabCard from "./labCard"
import LabsList from "../../../assets/labsList"
import DepartmentList from "../../../assets/departmentsList"
import Styles from "./styles"

const Labs = () => {
  const [value, setValue] = useState("")

  const dropDownHandler = e => {
    setValue(e.target.value)
  }

  const classes = Styles()
  const labs =
    value === ""
      ? LabsList.map(lab => (
          <Grid item key={lab.id}>
            <LabCard
              imgUrl={lab.image}
              labName={lab.name}
              department={lab.location}
            />
          </Grid>
        ))
      : LabsList.filter(ele => ele.location === value).map(lab => (
          <Grid item key={lab.id}>
            <LabCard
              imgUrl={lab.image}
              labName={lab.name}
              department={lab.location}
            />
          </Grid>
        ))
  return (
    <Grid
      container
      direction="column"
      classes={{ root: classes.container }}
      alignItems="center"
    >
      <Grid item classes={{ root: classes.space }}>
        <Typography variant="h2">Laboratories</Typography>
      </Grid>
      <Grid item classes={{ root: classes.space }}>
        <DropDown
          title="Filter by Department"
          dataList={DepartmentList}
          value={value}
          onChangeHandler={dropDownHandler}
          placeHolder="Department"
        />
      </Grid>
      <Grid
        item
        container
        direction="row"
        classes={{ root: classes.itemContainer }}
      >
        {labs}
      </Grid>
    </Grid>
  )
}

export default Labs
