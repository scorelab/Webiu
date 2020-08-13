import React, { useState } from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import PublicationsList from '../components/PublicationsList'
import {usePublicationsPageData} from '../queries/publications'
import ListPagination from "../components/ListPagination"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"

const PublicationsPage = () => {
  const publications = usePublicationsPageData()

  const PAGE_SIZE = 8
  const [currentPage, setCurrentPage] = useState(1)
  const paginatedPublications = publications.publications.slice(
    currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE, 
    (currentPage * PAGE_SIZE)
  )
  
  return (
    <MainLayout>
      <SEO title="Score Labs Publications Page" />
      <Header 
        mainText={publications.title}
        icon={faBookOpen}
        small
      />
      <br />
      <PublicationsList items={paginatedPublications}/>
      <ListPagination 
        pageSize={PAGE_SIZE}
        total={publications.publications.length}
        onChange={setCurrentPage}
      />
    </MainLayout>
  )
}

export default PublicationsPage