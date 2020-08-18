import React, { useState } from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import ProjectsList from '../components/ProjectsList'
import {useProjectsPageData} from '../queries/projects'
import ListPagination from "../components/ListPagination"
import { faCode } from "@fortawesome/free-solid-svg-icons"

const ProjectsPage = () => {
  const edges = useProjectsPageData()
  const projects = edges.map(edge => ({ id: edge.node.id, ...edge.node.frontmatter}))

  const PAGE_SIZE = 12
  const [currentPage, setCurrentPage] = useState(1)
  const paginatedProjects = projects.slice(
    currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE, 
    (currentPage * PAGE_SIZE)
  )

  return (
    <MainLayout>
      <SEO title="Score Labs Projects Page" />
      <Header 
        mainText="Projects"
        backgroundColor={'#edffe2'}
        icon={faCode}
        small
      />
      <br />
      <ProjectsList items={paginatedProjects} />
      <ListPagination 
        pageSize={PAGE_SIZE}
        total={projects.length}
        onChange={setCurrentPage}
      />
    </MainLayout>
  )
}

export default ProjectsPage