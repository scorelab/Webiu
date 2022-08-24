import React from "react"

import { ContributeBanner } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/ContributeBanner",
  component: ContributeBanner,
  argTypes: {
    header: { control: "text" },
    mainText: { control: "text" },
    subText: { control: "text" },
    gitBtnText: { control: "text" },
    gitBtnLink: { control: "text" },
    bannerBackground: { control: "text" },
    image: { control: "text" },
    contributeLink: { control: "text" },
    contributeText: { control: "text" },
  },
}

export const contributebanner = args => <ContributeBanner {...args} />

contributebanner.args = {
  mainText: "Contribute to SCoRe Lab org",
  contributeText: "More on Contributing",
  contributeLink: "#",
  gitBtnText: "Github",
  gitBtnLink: "#",
  bannerBackground : "#3a3c3d",
  image:
    "https://user-images.githubusercontent.com/64387054/183572058-8bb33c4e-8ba2-4ff9-88cb-9034cee6a383.png",
  subText:
    "This website is open source with hundreds of community contributors. You can propose edits to any of the content on this site, suggest awesome new features, or help us squash bugs.",
}
