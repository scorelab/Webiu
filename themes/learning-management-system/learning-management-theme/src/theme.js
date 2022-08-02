import { createTheme } from "@material-ui/core/styles"

const onyx = "#383838"
const lightText = "#ffffff"
const darkText = "#000000"
const greyText = "#9e9e9e"
const greenText = "#65cd2a"
const tomatoText = "#ff5f49"
const amazon = "#3b8754"
const citron = "#9eb929"

const theme = createTheme({
  palette: {
    primary: {
      main: onyx,
      lightvariant: greenText,
      light: lightText,
      dark: darkText,
    },
    secondary: {
      main: lightText,
      dark: amazon,
      light: citron,
    },
    common: {
      grey: greyText,
      tomato: tomatoText,
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontFamily: "Inter",
      fontStyle: "italic",
      fontWeight: "bold",
      color: darkText,
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    body1: {},
    body2: {},
  },
  overrides: {},
})

export default theme
