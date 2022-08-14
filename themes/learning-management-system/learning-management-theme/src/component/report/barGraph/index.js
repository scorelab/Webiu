import React from "react"
import { CChart } from "@coreui/react-chartjs"

const BarGraph = ({ labels, title, data, labelsName, color }) => {
  return (
    <CChart
      type="bar"
      data={{
        labels: labels,
        datasets: [
          {
            label: title,
            backgroundColor: color,
            data: data,
          },
        ],
      }}
      labels={labelsName}
      style={{ width: "80%", height: "80%" }}
    />
  )
}

export default BarGraph
