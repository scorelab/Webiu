import React from "react"
import Header from "./index"
import './style.sass';
export default {
    title: "Header ",
    component: Header ,
    argTypes: {

  mainText:{ control: 'text' },
  subText: { control: 'text' },
  buttonText: { control: 'text' },
  buttonLink: { control: 'text' },
  image: { control: 'text' },
  small: { control: 'boolean' },
  

    }
}
export const header  = (args) => <Header  {...args} />;
header.args = {
  mainText:"Scorelab",
  subText: "The SCoRe Lab has conducted researchs",
  buttonText: "Explore",
  buttonLink: "Header",
  image: "https://scorelab.org/images/community.png",
 
}