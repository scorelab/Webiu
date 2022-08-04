import React from "react"
import { graphql } from "gatsby"
import Layout from "../ui/layout"
import Profile from "../components/profile"

const ProfilePage = ({ location, data }) => {
  const userId = location.state.id
  const currentUser = data.users.edges.filter(ele => ele.node.id === userId.id)
  return (
    <Layout>
      <Profile user={currentUser[0]} />
    </Layout>
  )
}

export const query = graphql`
  query GetUsers {
    users: allItems {
      edges {
        node {
          category
          email
          description
          contactNumber
          id
          location
          name
          userName
          reviews {
            date
            customerReview
            issue
          }
        }
      }
    }
  }
`

export default ProfilePage
