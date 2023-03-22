import React from "react"
import Report from "../../themes/learning-management-system/learning-management-theme/src/component/report"
import UserDetail from "../../themes/learning-management-system/learning-management-theme/src/component/userDetail"

const ExamplePage = () => {
  return (<>
    <UserDetail/>
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
