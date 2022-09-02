import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import Button from "@material-ui/core/Button"
import BucketCard from "./bucketCard"
import Styles from "./styles"

const Bucket = () => {
  const [textAreaValue, setTextAreaValue] = useState("")
  const classes = Styles()

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      classes={{ root: classes.container }}
    >
      <Grid item>
        <Typography variant="h2">My Bucket</Typography>
      </Grid>
      <Grid item style={{ width: "50%" }}>
        <TextareaAutosize
          placeholder="Reason"
          minRows={2}
          className={classes.textAreaStyle}
          onChange={e => setTextAreaValue(e.target.value)}
        />
      </Grid>
      <Grid item style={{ width: "50%" }}>
        <Button classes={{ root: classes.btnStyle }}>Place Request</Button>
      </Grid>
      <Grid item>
        <BucketCard
          image="https://images.unsplash.com/photo-1553408226-42ecf81a214c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          name="Arduino nano"
          itemId="I01"
          qty="1"
        />
      </Grid>
    </Grid>
  )
}

export default Bucket
