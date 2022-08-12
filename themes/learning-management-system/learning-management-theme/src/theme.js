import { createTheme } from "@material-ui/core/styles"

const onyx = "#383838"
const lightText = "#ffffff"
const darkText = "#000000"
const greyText = "#9e9e9e"
const greenText = "#65cd2a"
const tomatoText = "#ff5f49"
const amazon = "#3b8754"
const citron = "#9eb929"
const blueText = "#3865B0"
const lightWhite = "#F5F5F5"

const theme = createTheme({
  palette: {
    primary: {
      main: onyx,
      lightvariant: greenText,
      light: lightText,
      dark: darkText,
    },
    secondary: {
      main: lightWhite,
      dark: amazon,
      light: citron,
    },
    common: {
      grey: greyText,
      tomato: tomatoText,
      blue: blueText,
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontFamily: "Inter",
      fontWeight: "bold",
      color: darkText,
    },
    h2: {
      fontSize: 24,
      fontFamily: "Inter",
      color: blueText,
    },
    h3: {
      fontSize: 20,
      fontFamily: "Inter",
      color: darkText,
    },
    h4: {
      fontSize: 20,
      fontFamily: "Inter",
      color: darkText,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 16,
      fontFamily: "Inter",
      color: darkText,
      fontWeight: "bold",
    },
    h6: {
      fontSize: 20,
      fontFamily: "Inter",
      color: lightText,
      fontWeight: "bold",
    },
    body1: {},
    body2: {
      fontSize: 18,
      fontFamily: "Inter",
      color: citron,
      fontWeight: "bold",
    },
  },
  overrides: {},
})

export default theme
