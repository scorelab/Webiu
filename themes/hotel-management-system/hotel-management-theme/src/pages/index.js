import React from "react"
import Layout from "../ui/layout"
import TextContainerWithBackgroundImage from "../components/home/textContainerWithBackgroundImage"
import Styles from "./styles"

const HomePage = () => {
  const classes = Styles()
  return (
    <Layout>
      <TextContainerWithBackgroundImage
        firstHeader="Cloud Hotel"
        secondHeader="#1 Hotlel & Restaurent Management Application"
        height="500px"
      />
    </Layout>
  )
}

export default HomePage
