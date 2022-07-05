import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { CartWrapper } from "./contexts"
import theme from "./theme"

const RootWrapper = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartWrapper>{element}</CartWrapper>
    </ThemeProvider>
  )
}

export default RootWrapper
