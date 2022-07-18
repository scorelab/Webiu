import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Styles from "./styles"
import StyledSelect from "./styledSelect"
import StyledTextField from "./styledTextField"

const JobForm = () => {
  const classes = Styles()
  const [jobTitle, setJobTitle] = useState("")
  const [country, setCountry] = useState("")
  const [province, setProvince] = useState("")
  const [city, setCity] = useState("")
  const [category, setCategory] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [jobDescription, setJobDescription] = useState("")

  const handleJobText = event => {
    setJobTitle(event.target.value)
  }
  const handleCountryChange = event => {
    setCountry(event.target.value)
  }
  const handleProvinceChange = event => {
    setProvince(event.target.value)
  }
  const handleCityChange = event => {
    setCity(event.target.value)
  }
  const handleCategoryChange = event => {
    setCategory(event.target.value)
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

  const countryList = [
    { key: "Sri Lanka", value: "Sri Lanka" },
    { key: "India", value: "India" },
    { key: "England", value: "England" },
  ]
  const provinceList = [
    { key: "Southern", value: "Southern" },
    { key: "Western", value: "Western" },
    { key: "North", value: "North" },
  ]
  const cityList = [
    { key: "Galle", value: "Galle" },
    { key: "Colombo", value: "Colombo" },
    { key: "Jaffna", value: "Jaffna" },
  ]
  const categoryList = [
    { key: "Painting", value: "Painting" },
    { key: "Electrical", value: "Electrical" },
    { key: "HandiWork", value: "HandiWork" },
    { key: "Driving", value: "Driving" },
    { key: "LandScaping", value: "LandScaping" },
    { key: "Plumbing", value: "Plumbing" },
  ]
  return (
    <Grid container direction="column" classes={{ root: classes.container }}>
      <Grid item>
        <Typography variant="h5" classes={{ root: classes.headerStyle }}>
          Create Job Posting
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          classes={{ root: classes.wrapper }}
          justifyContent="space-evenly"
        >
          <StyledTextField
            title="Job Title"
            placeholder="Job title"
            value={jobTitle}
            onChangeHandler={handleJobText}
          />
          <StyledSelect
            title="Country"
            value={country}
            onChangeHandler={handleCountryChange}
            dataList={countryList}
          />
          <StyledSelect
            title="Province"
            value={province}
            onChangeHandler={handleProvinceChange}
            dataList={provinceList}
          />
          <StyledSelect
            title="City"
            value={city}
            onChangeHandler={handleCityChange}
            dataList={cityList}
          />
          <StyledSelect
            title="Category"
            value={category}
            onChangeHandler={handleCategoryChange}
            dataList={categoryList}
          />
          <Grid container direction="row" alignItems="flex-end">
            <Grid item classes={{ root: classes.space }}>
              <StyledTextField
                title="Price Range"
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
          <StyledTextField
            title="Job description"
            placeholder="Job descrition"
            value={jobDescription}
            onChangeHandler={handleJobDescription}
          />
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

export default JobForm
