import React from "react"
import Layout from "../../ui/layout"
import Profile from "../../components/auth/profile"

const ProfilePage = () => {
  const profileData = [
    { key: "Email", value: "johndoe@gmail.com" },
    { key: "Name", value: "John Doe" },
    { key: "Contact Number", value: "076-7236711" },
  ]
  return (
    <Layout>
      <Profile profileData={profileData} />
    </Layout>
  )
}

export default ProfilePage
