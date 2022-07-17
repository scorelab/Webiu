import { createTheme } from "@material-ui/core/styles"

const iris = "#5A56CD"
const lightvariant = "#948FF5"
const lightText = "#ffffff"
const darkText = "#000000"
const lightGreen = "#58C78E"
const greyText = "#9e9e9e"
const cardOldLace = "#fbf3ea"
const alphaDark = "#00000099"

const theme = createTheme({
  palette: {
    primary: {
      main: iris,
      lightvariant: lightvariant,
      light: lightText,
      dark: darkText,
      alphaDark: alphaDark,
    },
    secondary: {
      main: lightGreen,
      light: lightText,
    },
    common: {
      grey: greyText,
      oldlace: cardOldLace,
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontFamily: "Montserrat",
      fontStyle: "italic",
      fontWeight: "bold",
      color: iris,
    },
    h2: {
      fontSize: 24,
      fontFamily: "Inter",
      color: darkText,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 24,
      fontFamily: "Inter",
      color: iris,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 20,
      fontFamily: "Inter",
      color: lightText,
    },
    h5: {
      fontSize: 15,
      fontFamily: "Inter",
      color: darkText,
      fontWeight: "bold",
    },
    body1: {
      fontSize: 20,
      fontFamily: "Inter",
      color: darkText,
    },
    body2: {
      fontSize: 20,
      fontFamily: "Inter",
      color: iris,
    },
  },
  overrides: {
    textPrimary: lightText,
  },
})

export default theme
