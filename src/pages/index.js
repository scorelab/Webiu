import React from "react"
import OffersTemplate from "../../themes/hotel-management-system/hotel-management-theme/src/components/offers"


const ExamplePage = () => {
  return (<>
    <OffersTemplate/>
    <div
      style={{
        position: "absolute",
        textAlign: "center",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h3 style={{ lineHeight: "45px" }}>
        Start editing the 'pages/index.js' file to import and show component
      </h3>
    </div>
    </>
  )
}

export default ExamplePage
