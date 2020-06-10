import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import ProjectsList from '../components/ProjectsList'
import {useProjectsPageData} from '../queries/projects'

const ProjectsPage = ({ data }) => {
  const edges = useProjectsPageData()
  const projects = edges.map(edge => ({ id: edge.node.id, ...edge.node.frontmatter}))
  console.log(projects)

  return (
    <MainLayout>
      <SEO title="Score Labs Projects Page" />
      <Header 
        mainText="Projects"
        small
      />
      <ProjectsList 
        items={projects}
      />
    </MainLayout>
  )
}

export default ProjectsPage