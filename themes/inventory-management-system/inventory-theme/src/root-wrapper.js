import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"

const RootWrapper = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

export default RootWrapper
