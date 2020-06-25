import React from "react"
import {useHomePageData} from '../queries/home'

// Components
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import About from '../components/About'
import MediumFeed from '../components/MediumFeed'
import ProjectsList from '../components/ProjectsList'
import PublicationsList from '../components/PublicationsList'

const HomePage = () => {
  const frontmatter = useHomePageData()
  const headerSection = frontmatter.headerSecton
  const aboutSection = frontmatter.aboutSection
  const projectsSection = frontmatter.projectsSection
  const publicationsSection = frontmatter.publicationsSection

  return (
    <MainLayout>
      <SEO title="Score Labs Home Page" />
      <Header 
        mainText={headerSection.mainText}
        subText={headerSection.subText}
        buttonText={headerSection.buttonText}
        buttonLink={headerSection.buttonLink}
        image={headerSection.image}
      />
      <About
        title={aboutSection.title}
        mainText={aboutSection.mainText}
        sideComponent={(
          <MediumFeed 
            title="Recent Articles"
            mediumUrl={aboutSection.mediumUrl}
            small={true}
            limit={3}
          />
        )}
      />
      <ProjectsList 
        title={projectsSection.title}
        items={projectsSection.projects}
        limit={6}
      />
      <PublicationsList 
        title={publicationsSection.title}
        items={publicationsSection.publications}
        limit={4}
      />
    </MainLayout>
  )
}

export default HomePage
