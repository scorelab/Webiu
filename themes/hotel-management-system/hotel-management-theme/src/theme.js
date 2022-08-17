import { createTheme } from "@material-ui/core/styles"

const violetBlue = "#3F51B5"
const darkvariant = "#2b3a84"
const lightText = "#ffffff"
const darkText = "#000000"
const lightVerdigris = "#5cc4b4"
const greyText = "#9e9e9e"
const cardOldLace = "#fbf3ea"

const theme = createTheme({
  palette: {
    primary: {
      main: violetBlue,
      light: lightText,
      dark: darkText,
    },
    secondary: {
      main: darkvariant,
    },
    common: {
      grey: greyText,
      oldlace: cardOldLace,
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
      fontSize: 24,
      fontFamily: "Inter",
      color: lightText,
    },
    h3: {
      fontSize: 24,
      fontFamily: "Inter",
      color: darkText,
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
      color: lightText,
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
