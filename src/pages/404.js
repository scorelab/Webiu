import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import PageNotFound from "../components/PageNotFound"
import { usePageNotFoundData } from "../queries/404"

const NotFoundPage = () => {
  const frontmatter = usePageNotFoundData()
  
  return (
    <MainLayout>
      <SEO title="404: Not found" />
      <PageNotFound 
        image={frontmatter.image}
        mainText={frontmatter.mainText}
        subText={frontmatter.subText}
      />
    </MainLayout>
  )
}

export default NotFoundPage
