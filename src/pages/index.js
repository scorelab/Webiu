import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import ProjectsList from '../components/ProjectsList'
import About from '../components/About'
import MediumFeed from '../components/MediumFeed'
import {useHomePageData} from '../queries/home'

const HomePage = () => {
  const frontmatter = useHomePageData()
  const headerSection = frontmatter.headerSecton
  const aboutSection = frontmatter.aboutSection
  const projectsSection = frontmatter.projectsSection

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
    </MainLayout>
  )
}

export default HomePage
