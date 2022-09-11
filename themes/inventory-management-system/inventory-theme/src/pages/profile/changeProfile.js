import React from "react"
import Layout from "../../ui/layout"
import ChangeProfile from "../../components/auth/changeProfile"

const ChangeProfilePage = () => {
  return (
    <Layout>
      <ChangeProfile
        firstName="John"
        lastName="Doe"
        contactNumber="0767125433"
      />
    </Layout>
  )
}

export default ChangeProfilePage
