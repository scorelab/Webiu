import React from "react"

import WelcomeContainer from "."

export default {
  title: "LearningManagementSystem/WelcomeContainer",
  component: WelcomeContainer,
  argTypes: {
    styledTitle: { control: "text" },
    title: { control: "text" },
    firstPara: { control: "text" },
    secondPara: { control: "text" },
  },
}

export const welcomeContainer = args => <WelcomeContainer {...args} />

welcomeContainer.args = {
  styledTitle: "Welcome ",
  title: "to UoM Institute",
  firstPara:
    "Proudly present for the first time in Galle 'UOM Higher Education Institute', Sri Lanka's only one state of the art auditorium built with luxury, high technology and modern technology for the children of the future.",
  secondPara:
    "The UOM Higher Education Institute has been designed to be aesthetically pleasing in nature, both indoor and outdoor with modern amenities like Air-Conditioned auditorium.",
}
