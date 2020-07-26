import { useStaticQuery, graphql } from "gatsby"

export const useNavigationBarData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query NavigationBarData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "navigationBar"}}}) {
          edges {
            node {
              id
              frontmatter {
                logo
                pages {
                  name
                  path
                  isSpecial
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges[0].node.frontmatter
}