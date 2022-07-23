import React from "react"
import Layout from "../ui/layout"
import HeaderBanner from "../component/home/headerBanner"
import HomePageContent from "../component/home/content/homePageContent"

const HomePage = () => {
  return (
    <Layout>
      <HeaderBanner />
      <HomePageContent />
    </Layout>
  )
}

export default HomePage
