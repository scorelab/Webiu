import React, { useState } from "react"

import StyledTextField from "."

export default {
  title: "CustomerService/StyledTextField",
  component: StyledTextField,
  argTypes: {
    title: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChangeHandler: { control: "functi" },
  },
}

export const styledSelect = args => {
  const [text, setText] = useState("")
  return (
    <div style={{ backgroundColor: "#800080", padding: "20px" }}>
      <StyledTextField
        {...args}
        value={text}
        onChangeHandler={e => setText(e.target.value)}
      />
    </div>
  )
}

styledSelect.args = {
  title: "Name",
  placeholder: "Set name",
}
