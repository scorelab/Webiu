## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the ImageGrid Component

This is a resuasble component for displaying grid of images and categories in a section. This can be very useful when sharing screenshot and different range of products of a project. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {ImageGrid} from "../components/ImageGrid";`

## How to handle props to the component

```
<ImageGrid size={4} images={[{imageUrl: "image_url", imageText: "image_text"}]} header="sample-header" row={false}
           categories={false} categoryData={[{text: "text", color: "#e52165", route: "/", image: "sample-path"}}]} />
```

`size` prop is used to decide how many images should render per row e.g size = 3 means 4 images per row
`images` prop is an array of images and corresponding text you want to display
`header` prop is the title of the section
`categories` and `row` props are the bool to determine if it is image-grid or categories or row-category component
