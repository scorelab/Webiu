import React from "react"

import { Sponsors } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Home/Sponsors",
  component: Sponsors,
  argTypes: {
    subText: { control: "text" },
    mainText: { control: "text" },
    sponsorsList: { control: "array" },
    messagesList: { control: "array" },
  },
}

export const sponsors = args => <Sponsors {...args} />

sponsors.args = {
  subText: "PARTNERS AND SPONSORS",
  mainText: "OFFICIAL SPONSORS",
  sponsorsList: [
    {
      name: "Logo Ipsum",
      image:
        "https://user-images.githubusercontent.com/56475750/209560573-ec70ec72-288c-4761-bbf8-ff70ee7524c7.png",
    },
    {
      name: "Logo Ipsum",
      image:
        "https://user-images.githubusercontent.com/56475750/209560738-b2bcc68d-39d9-4f26-b8a2-7fac0943325d.png",
    },
    {
      name: "Logo Ipsum",
      image:
        "https://user-images.githubusercontent.com/56475750/209560845-4b48b6a1-e38d-4dd6-afd4-21dcb3229e6f.png",
    },
    {
      name: "Logo Ipsum",
      image:
        "https://user-images.githubusercontent.com/56475750/209560911-23d22d3d-db28-49b9-8e95-214722d9b326.png",
    },
    {
      name: "Logo Ipsum",
      image:
        "https://user-images.githubusercontent.com/56475750/209560971-41ec7d07-ecdd-4691-b2d3-c5525119d4e5.png",
    },
    {
      name: "Logo Ipsum",
      image:
        "https://user-images.githubusercontent.com/56475750/209561112-d9e5a359-3e32-40ea-9055-951dd8a06317.png",
    },
  ],
  messagesList: [
    {
      text:
        "STREET FOOD CONVENTION WILL SHOWCASE PRODUCTS LIKE PACKED FOOD, BEEF AND LAMB, STREET FOOD.",
      speaker: "MARIA HERNANDEZ",
      position: "UX Manager",
      image:
        "https://user-images.githubusercontent.com/56475750/209636327-eaddf6b3-c923-427d-954a-770d6c391e56.jpg",
    },
    {
      text:
        "STREET FOOD CONVENTION WILL SHOWCASE PRODUCTS LIKE PACKED FOOD, BEEF AND LAMB, STREET FOOD.",
      speaker: "MARIA HERNANDEZ",
      position: "UX Manager",
      image:
        "https://user-images.githubusercontent.com/56475750/209636327-eaddf6b3-c923-427d-954a-770d6c391e56.jpg",
    },
  ],
}
