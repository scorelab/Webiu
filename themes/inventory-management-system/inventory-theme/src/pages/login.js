import React from "react"
import ParticlesBg from "particles-bg"
import { Zoom } from "react-awesome-reveal"
import Typography from "@material-ui/core/Typography"

const LoginPage = () => {
  return (
    <div>
      <ParticlesBg
        color="#009688"
        type="cobweb"
        num={window.innerWidth / 40}
        bg
      />
      <Zoom triggerOnce>
        <Typography variant="h3">Welcome</Typography>
      </Zoom>
    </div>
  )
}

export default LoginPage
