import { createTheme } from "@material-ui/core/styles"

const darkGrey = "#24645C"
const green = "#3B885B"
const lightText = "#ffffff"
const darkText = "#000000"
const greyText = "#9e9e9e"
const hotPink = "#E34964"
const tomatoText = "#ff5f49"

const theme = createTheme({
  palette: {
    primary: {
      main: green,
      light: lightText,
      dark: darkText,
    },
    secondary: {
      main: darkGrey,
    },
    common: {
      grey: greyText,
      tomato: tomatoText,
      hotpink: hotPink,
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontFamily: "Inter",
      fontStyle: "italic",
      fontWeight: "bold",
      color: lightText,
    },
    h2: {
      fontSize: 28,
      fontFamily: "Inter",
      fontWeight: "bold",
    },
    h3: {
      fontSize: 24,
      fontFamily: "Inter",
      fontWeight: "bold",
      color: darkText,
    },
    h4: {
      fontSize: 20,
      fontFamily: "Inter",
      color: lightText,
    },
    h5: {
      fontSize: 15,
      fontFamily: "Inter",
      color: lightText,
    },
    h6: {
      fontSize: 15,
      fontFamily: "Inter",
      color: darkText,
    },
    h7: {
      fontSize: 15,
      fontFamily: "Inter",
      color: greyText,
      fontWeight: "bold",
    },
    body1: {
      fontSize: 20,
      fontFamily: "Inter",
      color: darkText,
    },
    body2: {
      fontSize: 15,
      fontFamily: "Inter",
      color: greyText,
    },
  },
  overrides: {},
})

export default theme
