import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@mui/material/TextField"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import Button from "@material-ui/core/Button"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import Styles from "./styles"
import StyledTextField from "../jobFrom/styledTextField"

const ServiceRequest = () => {
  const classes = Styles()
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [jobDescription, setJobDescription] = useState("")

  const handleChange = newValue => {
    setDate(newValue)
  }
  const handleTime = newValue => {
    setTime(newValue)
  }
  const handleMinPriceChange = event => {
    setMinPrice(event.target.value)
  }
  const handleMaxPriceChange = event => {
    setMaxPrice(event.target.value)
  }
  const handleJobDescription = event => {
    setJobDescription(event.target.value)
  }

  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid item>
        <Typography variant="h5">New Service Request</Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.wrapper }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            classes={{ root: classes.space }}
          >
            <Grid item>
              <Typography variant="h4">Pick a date</Typography>
            </Grid>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="MM/dd/yyyy"
                  value={date}
                  InputProps={{ classes: { root: classes.outline } }}
                  disablePast={true}
                  disableHighlightToday={false}
                  onChange={handleChange}
                  renderInput={params => (
                    <TextField
                      {...params}
                      sx={{
                        svg: { color: "#fff" },
                        input: { color: "#fff" },
                        label: { color: "#fff" },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            item
            container
            direction="column"
            classes={{ root: classes.space }}
          >
            <Grid item>
              <Typography variant="h4">Pick a time</Typography>
            </Grid>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  value={time}
                  InputProps={{ classes: { root: classes.outline } }}
                  disablePast={true}
                  disableHighlightToday={false}
                  onChange={handleTime}
                  renderInput={params => (
                    <TextField
                      {...params}
                      sx={{
                        svg: { color: "#fff" },
                        input: { color: "#fff" },
                        label: { color: "#fff" },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="flex-end">
            <Grid item classes={{ root: classes.spaceHorizontal }}>
              <StyledTextField
                title="Price range"
                placeholder="Min value"
                value={minPrice}
                onChangeHandler={handleMinPriceChange}
              />
            </Grid>
            <Grid item>
              <StyledTextField
                placeholder="Max value"
                value={maxPrice}
                onChangeHandler={handleMaxPriceChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <StyledTextField
            title="Job description"
            placeholder="Job descrition"
            value={jobDescription}
            onChangeHandler={handleJobDescription}
          />
        </Grid>
        <Grid item>
          <Grid container classes={{ root: classes.bottomWrapper }}>
            <Button classes={{ root: classes.btnStyle }}>
              <Typography variant="h3">Submit</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ServiceRequest
