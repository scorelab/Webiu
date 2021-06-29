## Initial Setup
Hope you have successfully set up the project in your local system and install all dependencies

## About the ImageGrid Component
This is a resuasble component for displaying grid of images. This can be very useful when sharing screenshot of a project. This Component is highly reusable and customizable via props

## How to use the component
Import the component to `pages/index.js`
`import {ImageGrid} from "../components/ImageGrid";`

## How to handle props to the component
```
<ImageGrid size={4} images={[{imageUrl: "image_url", imageText: "image_text"},
                             {imageUrl: "image_url", imageText: "image_text"},
                             {imageUrl: "image_url", imageText: "image_text"}]} />
```

`size` prop is used to decide how many images should render per row e.g size = 3 means 4 images per row
`images` prop is an array of images and corresponding text you want to display