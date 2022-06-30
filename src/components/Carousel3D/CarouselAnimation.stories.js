import React from "react"

import CarouselAnimation from "./index"

export default {
  title: "General/Carousel3D",
  component: CarouselAnimation,
  argTypes: {
    promoList: { control: "array" },
  },
}

export const carouselAnimation = args => <CarouselAnimation {...args} />

carouselAnimation.args = {
  promoList: [
    {
      image: "https://scorelab.org/logos/projects/labellab.png",
    },
    {
      image: "https://scorelab.org/logos/projects/dronesym.png",
    },
    {
      image: "https://scorelab.org/logos/projects/senz.png",
    },
  ],
}
