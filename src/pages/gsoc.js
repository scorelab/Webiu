import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import DescriptionContainer from "../components/DescriptionContainer"
import {useGsocData} from '../queries/gsoc'

const GsocPage = () => {
  const gsoc = useGsocData()

  console.log(gsoc)

  return (
    <MainLayout>
      <SEO title="Score Labs GSOC Page" />
      <Header 
        mainText={gsoc.title}
        small
      />
      <DescriptionContainer
        image={gsoc.mainImage}
        mainText={gsoc.description}
      />
    </MainLayout>
  )
}

export default GsocPage