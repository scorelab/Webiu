import React from "react"
import Header from "./header/index"

const tabList = [
  {
    id: 1,
    route: "/findService",
    name: "Find Service",
  },
  {
    id: 2,
    route: "/createJob",
    name: "Create Bidding Job",
  },
  {
    id: 3,
    route: "/complain",
    name: "Complain",
  },
]

const btnList = [
  { id: 1, name: "Sign In" },
  { id: 2, name: "Sign Up" },
]

const Layout = ({ children }) => {
  return (
    <div>
      <Header firstName="SolutionHub" btnList={btnList} tabList={tabList} />
      {children}
    </div>
  )
}

export default Layout
