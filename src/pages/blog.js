import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import MediumFeed from "../components/MediumFeed"
import { Container, Row, Col } from "react-bootstrap"

const BlogPage = () => {

  return (
    <MainLayout>
      <SEO title="Score Labs Blog Page" />
      <Header 
        mainText="Blog"
        small
      />
      <br />
      <MediumFeed 
        mediumUrl={"https://medium.com/feed/scorelab"}
      />
    </MainLayout>
  )
}

export default BlogPage