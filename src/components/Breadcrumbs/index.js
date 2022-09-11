import React from "react"
import { Link } from "gatsby"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"
import Styles from "./styles"

const BreadcrumbsWrapper = ({ elementList }) => {
  const classes = Styles()
  const itemList = elementList.slice(0, -1)
  const lastElement = elementList.slice(-1)

  const links = itemList.map((item, i) => (
    <Link to={item.url} className={classes.link} key={i}>
      {item.name}
    </Link>
  ))

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="large" />}
      aria-label="breadcrumb"
      className={classes.Breadcrumbs}
    >
      {links}
      <Typography>{lastElement[0].name}</Typography>
    </Breadcrumbs>
  )
}
BreadcrumbsWrapper.propTypes = {
  elementList: PropTypes.array,
}

export default BreadcrumbsWrapper
