import { useStaticQuery, graphql } from "gatsby"

export const useTeamData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query TeamData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "team"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                heads {
                  name
                  title
                  image
                }
                researchers {
                  name
                  title
                  image
                }
                alumni {
                  name
                  title
                  image
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