import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import ProjectsList from '../components/ProjectsList'
import {useProjectsPageData} from '../queries/projects'

const ProjectsPage = () => {
  const edges = useProjectsPageData()
  const projects = edges.map(edge => ({ id: edge.node.id, ...edge.node.frontmatter}))

  return (
    <MainLayout>
      <SEO title="Score Labs Projects Page" />
      <Header 
        mainText="Projects"
        small
      />
      <br />
      <ProjectsList 
        items={projects}
      />
    </MainLayout>
  )
}

export default ProjectsPage