import React from "react"

import { TestimonialAndFaq } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/TestimonialAndFaq",
  component: TestimonialAndFaq,
  argTypes: {
    mainTextLeft: { control: "text" },
    subTextLeft: { control: "text" },
    mainTextRight: { control: "text" },
    subTextRight: { control: "text" },
    description: { control: "text" },
    subImage: { control: "text" },
    subDataHeading: { control: "text" },
    subDataPara: { control: "text" },
    faqData: { control: "object" },
  },
}

export const testimonialandfaq = args => <TestimonialAndFaq {...args} />

testimonialandfaq.args = {
  subTextLeft: "TAKE A LOOK AT OUR",
  mainTextLeft: "Buy and Sell Bitcoin",
  subTextRight: "TAKE A LOOK AT OUR",
  mainTextRight: "FAQ",
  imageOne:
    "https://user-images.githubusercontent.com/64387054/191067556-98d44214-0733-4de1-b463-e12f56c486c2.png",
  imageTwo:
    "https://user-images.githubusercontent.com/64387054/191067547-a08ab998-172b-495b-8feb-26a87b23dddc.png",
  description:
    "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. Curabitur ultricies pellentesque mauris a elementum. Cras eu ornare turpis. ",
  subImage:
    "https://user-images.githubusercontent.com/64387054/176839129-3b9eb8d2-f3f0-4d72-961e-ab0f1148edd9.svg",
  subDataHeading: "Micheal Smith",
  subDataPara: "Personal Trader",
  faqData: [
    {
      question: "Q1. Lorem Impsume one",
      answer:
        "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. ",
    },
    {
      question: "Q2. Lorem Impsume Two",
      answer:
        "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. ",
    },
    {
      question: "Q3. Lorem Impsume Three",
      answer:
        "Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. ",
    },
  ],
}
