## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the TestimonialAndFaq Component

This is a resuasble component for a testimonial and Faq section component, in short it is a multipurpose component. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {TestimonialAndFaq} from "../components/TestimonialAndFaq";`

## How to handle props to the component

```
<TestimonialAndFaq
  mainTextLeft = "sample-mainText-left"
  subTextLeft = "sample-subText-left"
  mainTextRight = "sample-mainText-Right"
  subTextRight = "sample-subText-Right"
  description = "sample-desrciption"
  faqData = {question= "sample-text" , answer= "sample-text"}
  subImage = "sample-Image"
  subDataHeading = "sample-data"
  subDataPara ="sample-data-para"
 />
```

`mainTextLeft` prop is the main text of the left section
`subTextLeft` = prop is the sub text of the left section
`mainTextRight` = prop is the main text of the Right section
`subTextRight` = prop is the sub text of the Right section
`description` = prop is the description of the testimonial section
`faqData` = prop is the data of the Faq section
`subImage` = prop is the image of the testimonail section
`subDataHeading` = prop is the heading prop is the image of the testimonail section
`subDataPara` = prop is the para of the testimonail sectoin
