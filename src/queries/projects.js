import { useStaticQuery, graphql } from "gatsby"

export const useProjectsPageData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query ProjectsPageData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "project"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                template
                description
                image
                slug
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}