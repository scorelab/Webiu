import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import ReportCard from "./reportCard"
import BarGraph from "./barGraph"
import Styles from "./styles"
import myGroups from "../../../assets/data/my-group-list"

const Report = () => {
  const classes = Styles()
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const title = "Marks"
  const [marksList, setMarkList] = useState(myGroups[0].marks)
  const groups = myGroups.map(item => {
    return (
      <Grid item key={item.id}>
        <ReportCard
          iconName={faUsers}
          title={`${item.subject} - ${item.year}`}
          onClickHandler={() => {
            setMarkList(item.marks)
          }}
        />
      </Grid>
    )
  })
  return (
    <Grid container direction="row">
      <Grid item>
        <Grid
          container
          direction="column"
          classes={{ root: classes.container }}
        >
          <Grid item>
            <Typography>My Groups</Typography>
          </Grid>
          {groups}
        </Grid>
      </Grid>
      <Grid item xs classes={{ root: classes.graphContainer }}>
        <BarGraph
          labels={labels}
          title={title}
          data={marksList}
          labelsName="months"
          color="#f87979"
        />
      </Grid>
    </Grid>
  )
}

export default Report
