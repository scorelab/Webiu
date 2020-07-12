import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import PublicationsList from '../components/PublicationsList'
import {usePublicationsPageData} from '../queries/publications'

const PublicationsPage = () => {
  const publications = usePublicationsPageData()

  return (
    <MainLayout>
      <SEO title="Score Labs Publications Page" />
      <Header 
        mainText={publications.title}
        small
      />
      <PublicationsList 
        items={publications.publications}
      />
    </MainLayout>
  )
}

export default PublicationsPage