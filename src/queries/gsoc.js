import { useStaticQuery, graphql } from "gatsby"

export const useGsocData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query GsocData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "gsoc"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                mainImage
                description
                links {
                  name
                  url 
                }

                mailingListHeading
                mailingListFeedUrl

                guidelinesHeading
                guidelinesDescription
                guidelines

                projectListHeading
                projectListButtonText
                projectListUrl
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges.length > 0 ? allMarkdownRemark.edges[0].node.frontmatter : null
}