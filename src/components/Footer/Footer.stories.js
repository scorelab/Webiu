import React from "react"
import {Footer} from "./index"

export default {
  title: "Footer",
  component: Footer,
}
const socialLinksarray = {
  facebook: "https://www.facebook.com/SCoRe.Lab.Org/",
  gitter: "https://gitter.im/scorelab/",
  twitter: "https://twitter.com/",
  github: "https://github.com/scorelab/",
  linkedin:
    "https://www.linkedin.com/company/sustainable-computing-research-group-score-/",
  medium: "https://medium.com/scorelab/",
}
export const footer = () => (
  <Footer
    mainText=" © Copyright 2020 SCoRe Lab"
    socialLinks={socialLinksarray}
  />
)
