import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import ProjectDetail from '../components/ProjectDetail';

export default function ProjectTemplate({data}) {
  const { frontmatter: project } = data.markdownRemark;

  console.log(data)
  return (
    <MainLayout>
      <SEO title={`Score Labs ${project.title} Project`} />
      <ProjectDetail 
        project={project}
      />
    </MainLayout>
  )
}

export const postQuery = graphql`
  query ProjectPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug} }) {
      html
      frontmatter {
        slug
        title
        description
        image
        screenshots
        links {
          name
          url
        }
      }
    }
  }
`