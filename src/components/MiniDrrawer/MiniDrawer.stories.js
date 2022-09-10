import React from "react"

import MiniDrawer from "."
import { faFlask, faCartPlus, faClock } from "@fortawesome/free-solid-svg-icons"

export default {
  title: "InventoryManagementSystem/MiniDrawer",
  component: MiniDrawer,
  argTypes: {
    orgName: { control: "text" },
    navList: { control: "array" },
  },
}

export const miniDrawer = args => <MiniDrawer {...args} />

miniDrawer.args = {
  orgName: "SCoRe Lab",
  navList: [
    { id: "1", url: "/", name: "Laboratories", icon: faFlask },
    { id: "2", url: "/bucket", name: "My Bucket", icon: faCartPlus },
    { id: "3", url: "/borrowings", name: "Borrowings", icon: faClock },
  ],
}
