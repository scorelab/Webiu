import React from "react"
import Grid from "@material-ui/core/Grid"
import ProfileSection from "./profileSection"
import ReviewSection from "./reviewSection"

const Profile = ({ user }) => {
  const userDetails = {
    "Full Name:": user.node.name,
    "User Name:": user.node.userName,
    "Location:": user.node.location,
    "Mobile Number:": user.node.contactNumber,
    "Email:": user.node.email,
  }
  const reviews = user.node.reviews ? user.node.reviews : []
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <ProfileSection
          description={user.node.description}
          userDetails={userDetails}
        />
      </Grid>
      <Grid item>
        <ReviewSection reviews={reviews} />
      </Grid>
    </Grid>
  )
}

export default Profile
