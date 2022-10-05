## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Contact Us Component

This is a resuasble component for contact and subscribe forms which are very common on modern websites

## How to use the component

Import the component to `pages/index.js`
`import {ContactUsThemeFour} from "../components/ContactUsThemeFour";`

How to handle props to the component

```
<ContactUsThemeFour contactListData= {detail = "detail-one", detail = "detail-two", detail = "detail-three"}
subTextLeftCol ="sample-text"
mainTextLeftCol = "mainTextLeftCol"
subHeadingLeftCol="sample-heading"
subTextRightCol="sample-right-col"
mainTextLeftCol="sample-text"/>
```

`contactListData` prop is the detail on the contact info
`subTextLeftCol` , `mainTextLeftCol` and `subHeadingLeftCol` props are the left side of contact form
`subTextRightCol` and `mainTextRightCol` props are the details for the right side of the contact form
