import React from "react"
import Table from "@material-ui/core/Table"
import Paper from "@material-ui/core/Paper"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import Styles from "./styles"

const DataTable = ({ headerList, dataList }) => {
  const classes = Styles()
  const headerCells = headerList.map(item => (
    <TableCell key={item.id} classes={{ root: classes.cellStyle }}>
      {item.header}
    </TableCell>
  ))
  const bodyCells = dataList.map((item, i) => (
    <TableRow key={i}>
      {Object.keys(item).map(ele => (
        <TableCell>{item[ele]}</TableCell>
      ))}
    </TableRow>
  ))
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>{headerCells}</TableRow>
        </TableHead>
        <TableBody classes={{ root: classes.rowStyle }}>{bodyCells}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
