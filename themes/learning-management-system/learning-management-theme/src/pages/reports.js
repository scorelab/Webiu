import React from "react"
import Grid from "@material-ui/core/Grid"
import Layout from "../ui/layout"
import { CChart } from "@coreui/react-chartjs"

const Reports = () => {
  return (
    <Layout>
      <CChart
        type="bar"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Marks",
              backgroundColor: "#f87979",
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 10, 91, 12, 15, 11],
            },
          ],
        }}
        labels="months"
      />
    </Layout>
  )
}

export default Reports
