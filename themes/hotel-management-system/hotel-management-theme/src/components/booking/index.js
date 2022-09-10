import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import SelectComponent from "../food/select"
import BookingCard from "./bookingCard"
import Styles from "./styles"
import RoomList from "../../../assets/data/roomList"
import RoomTypes from "../../../assets/data/roomTypes"
import {
  faBuilding,
  faUser,
  faDollar,
  faBed,
} from "@fortawesome/free-solid-svg-icons"

const RoomsPageTemplate = () => {
  const [type, setType] = useState("")

  const handleChange = event => {
    setType(event.target.value)
  }

  const roomItems =
    type === ""
      ? RoomList.map(item => (
          <Grid item key={item.id}>
            <BookingCard
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              roomId={item.roomId}
              moreInfoList={item.moreInfoList}
              availability={item.availability}
            />
          </Grid>
        ))
      : RoomList.filter(ele => ele.type === type).map(item => (
          <Grid item key={item.id}>
            <BookingCard
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              roomId={item.roomId}
              moreInfoList={item.moreInfoList}
              availability={item.availability}
            />
          </Grid>
        ))
  const classes = Styles()
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item classes={{ root: classes.headerStyle }}>
        <Typography variant="h3" align="center">
          Rooms at<span className={classes.decoratedHeader}> Cloud Hotel</span>
        </Typography>
      </Grid>
      <Grid item classes={{ root: classes.selectStyle }}>
        <SelectComponent
          title="Type"
          value={type}
          onChangeHandler={handleChange}
          dataList={RoomTypes}
        />
      </Grid>
      <Grid
        item
        container
        direction="row"
        classes={{ root: classes.itemContainer }}
      >
        {roomItems}
      </Grid>
    </Grid>
  )
}

export default RoomsPageTemplate
