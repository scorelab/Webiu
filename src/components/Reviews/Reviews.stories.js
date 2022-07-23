import React from "react"

import ReviewSection from "."

export default {
  title: "CustomerService/Reviews",
  component: ReviewSection,
  argTypes: {
    reviews: { control: "array" },
  },
}

export const reviewSection = args => <ReviewSection {...args} />

reviewSection.args = {
  reviews: [
    {
      customerReview: "Great Service. 100%",
      date: "23/07/2022",
      issue: "There is a electrical work need to be done",
    },
    {
      customerReview: "Great Service. 100%",
      date: "22/07/2022",
      issue: "There is a wiring need to be done",
    },
  ],
}
