import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import DataTable from "./table"
import HeaderList from "../../../assets/tabularHeadersList"
import DataList from "../../../assets/tabularDataList"
import Styles from "./styles"

const BorrowingsTemplate = () => {
  const classes = Styles()

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h2">Borrowed Items</Typography>
      </Grid>
      <Grid item classes={{ root: classes.container }}>
        <DataTable headerList={HeaderList} dataList={DataList} />
      </Grid>
    </Grid>
  )
}

export default BorrowingsTemplate
