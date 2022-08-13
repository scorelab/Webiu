import React from "react"
import PropTypes from "prop-types"
import { CChart } from "@coreui/react-chartjs"

const BarChart = ({ labels, title, data, labelsName, color }) => {
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
    />
  )
}

BarChart.propTypes = {
  labels: PropTypes.array,
  title: PropTypes.string,
  data: PropTypes.array,
  labelsName: PropTypes.string,
  color: PropTypes.string,
}

export default BarChart
