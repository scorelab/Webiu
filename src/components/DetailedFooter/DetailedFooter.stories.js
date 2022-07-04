import React from "react"

import Footer from "."

export default {
  title: "Home/DetailedFooter",
  component: Footer,
  argTypes: {
    contactNumber: { control: "text" },
    email: { control: "text" },
    privacyPolicyLink: { control: "text" },
    facebookLink: { control: "text" },
    twitterLink: { control: "text" },
    instragramLink: { control: "text" },
  },
}

export const descriptioncontainer = args => <Footer {...args} />

descriptioncontainer.args = {
  contactNumber: "+94915555555",
  email: "guest@scorelab.io",
  privacyPolicyLink: "#",
  facebookLink: "#",
  twitterLink: "#",
  instragramLink: "#",
}
