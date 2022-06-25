import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../src/styles/theme"

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}
