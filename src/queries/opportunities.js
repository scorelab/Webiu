import { useStaticQuery, graphql } from "gatsby"

export const useOpportunitiesData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query OpportunitiesData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "opportunities"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                section1 {
                  heading
                  description
                  image
                }
                section2 {
                  left {
                    heading
                    subHeading
                    description
                  }
                  right {
                    heading
                    subHeading
                    description
                  }
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