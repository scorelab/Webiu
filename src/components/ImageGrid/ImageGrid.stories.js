import React from "react"
import ImageGrid from "./index"
import './style.sass';
export default {
    title: "ImageGrid",
    component: ImageGrid,
    argTypes: {
        images: { control: 'array' },
    }
}
export const imageGrid = (args) => <ImageGrid  {...args} />;
imageGrid.args = {
 images :['https://scorelab.org/logos/projects/elly.png']
}