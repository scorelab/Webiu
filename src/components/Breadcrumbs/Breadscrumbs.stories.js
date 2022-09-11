import React from "react"

import BreadcrumbsWrapper from "."

export default {
  title: "InventoryManagementSystem/BreadcrumbsWrapper",
  component: BreadcrumbsWrapper,
  argTypes: {
    elementList: { control: "array" },
  },
}

export const breadcrumbsWrapper = args => <BreadcrumbsWrapper {...args} />

breadcrumbsWrapper.args = {
  elementList: [{ name: "Labs", url: "/" }, { name: "Categories" }],
}
