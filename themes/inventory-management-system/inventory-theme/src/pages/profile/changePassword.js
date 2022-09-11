import React from "react"
import Layout from "../../ui/layout"
import ChangePassword from "../../components/auth/changePassword"

const ChangePasswordPage = () => {
  return (
    <Layout>
      <ChangePassword currentPassword="abcd1234" />
    </Layout>
  )
}

export default ChangePasswordPage
