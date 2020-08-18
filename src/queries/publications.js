import { useStaticQuery, graphql } from "gatsby"

export const usePublicationsPageData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query PublicationsPageData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "publications"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                publications {
                  title
                  conference
                  authors
                  slug
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges.length > 0 ? allMarkdownRemark.edges[0].node.frontmatter : null
}