import React, { useState } from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import PublicationsList from '../components/PublicationsList'
import {usePublicationsPageData} from '../queries/publications'
import { Pagination } from 'antd';

const PublicationsPage = () => {
  const pageSize = 6
  const publications = usePublicationsPageData()
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedPublications = publications.publications.slice(
    currentPage === 1 ? 0 : (currentPage - 1) * pageSize, 
    (currentPage * pageSize)
  )
  
  return (
    <MainLayout>
      <SEO title="Score Labs Publications Page" />
      <Header 
        mainText={publications.title}
        small
      />
      <br />
      <PublicationsList 
        items={paginatedPublications}
      />
      <Pagination 
        defaultCurrent={1}
        pageSize={pageSize} 
        total={publications.publications.length} 
        onChange={(page) => { 
          window.scrollTo(0, 0) 
          setCurrentPage(page)
        }}
        hideOnSinglePage
      />
    </MainLayout>
  )
}

export default PublicationsPage