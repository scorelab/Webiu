import React, { useState } from "react"

import StyledSelect from "."

export default {
  title: "CustomerService/StyledSelect",
  component: StyledSelect,
  argTypes: {
    title: { control: "text" },
    value: { control: "text" },
    onChangeHandler: { control: "functi" },
    dataList: { control: "array" },
  },
}

export const styledSelect = args => {
  const [country, setCountry] = useState("")
  return (
    <div style={{ backgroundColor: "#800080" }}>
      <StyledSelect
        title="Country"
        value={country}
        dataList={[
          { key: "Sri Lanka", value: "Sri Lanka" },
          { key: "India", value: "India" },
          { key: "England", value: "England" },
        ]}
        onChangeHandler={e => setCountry(e.target.value)}
      />
    </div>
  )
}
