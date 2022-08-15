import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"

const StatisticsSection = ({ statistics }) => {
  const classes = Styles()
  const statisticsList = statistics.map((item, i) => {
    return (
      <Grid item key={i}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography classes={{ root: classes.statisticValue }}>
              {item.value}
            </Typography>
          </Grid>
          <Grid item>
            <Typography classes={{ root: classes.statisticName }}>
              {item.name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  })
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      classes={{ root: classes.container }}
    >
      {statisticsList}
    </Grid>
  )
}

StatisticsSection.propTypes = {
  statistics: PropTypes.array,
}

export default StatisticsSection
