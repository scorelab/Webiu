import { useStaticQuery, graphql } from "gatsby"

export const usePageNotFoundData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query PageNotFoundData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "pageNotFound"}}}) {
          edges {
            node {
              id
              frontmatter {
                image
                mainText
                subText
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges.length > 0 ? allMarkdownRemark.edges[0].node.frontmatter : null
}