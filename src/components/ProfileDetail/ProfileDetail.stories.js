import React from "react"

import ProfileSection from "."

export default {
  title: "CustomerService/ProfileDetails",
  component: ProfileSection,
  argTypes: {
    description: { control: "text" },
    userDetails: { control: "object" },
  },
}

export const profileDetails = args => <ProfileSection {...args} />

profileDetails.args = {
  description:
    "I am a fully qualified person with experience in electrical working",
  userDetails: {
    "Full Name:": "John Doe",
    "User Name:": "JD1234",
    "Location:": "Colombo",
    "Mobile Number:": "+945687742",
    "Email:": "john@gmail.com",
  },
}
