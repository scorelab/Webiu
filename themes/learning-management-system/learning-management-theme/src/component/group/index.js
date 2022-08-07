import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import SearchBar from "./searchBar"
import GroupCategory from "./groupCategory"
import IconCard from "./iconCard"
import { faUsers, faUserGear } from "@fortawesome/free-solid-svg-icons"
import Styles from "./styles"

const GroupPage = () => {
  const classes = Styles()
  return (
    <Grid container direction="row" classes={{ root: classes.container }}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4">Groups in "UOM ISTITUTE"</Typography>
          </Grid>
          <Grid item>
            <GroupCategory iconName={faUserGear} title="All Groups" />
          </Grid>
          <Grid item>
            <GroupCategory iconName={faUsers} title="My Groups" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Grid container direction="column" classes={{ root: classes.wrapper }}>
          <Grid item>
            <SearchBar
              placeHolder="Search for groups...."
              handleSearch={() => {
                console.log("hi")
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            classes={{ root: classes.cardGroup }}
          >
            <Grid item>
              <IconCard
                iconName={faUsers}
                subject="Economics"
                name="John Doe"
                year="2022 A/L"
                participantsCount="100"
                memberText="Members"
                moduleCount="8"
                moduleText="Modules"
              />
            </Grid>
            <Grid item>
              <IconCard
                iconName={faUsers}
                subject="Economics"
                name="John Doe"
                year="2022 A/L"
                participantsCount="100"
                memberText="Members"
                moduleCount="8"
                moduleText="Modules"
              />
            </Grid>
            <Grid item>
              <IconCard
                iconName={faUsers}
                subject="Economics"
                name="John Doe"
                year="2022 A/L"
                participantsCount="100"
                memberText="Members"
                moduleCount="8"
                moduleText="Modules"
              />
            </Grid>
            <Grid item>
              <IconCard
                iconName={faUsers}
                subject="Economics"
                name="John Doe"
                year="2022 A/L"
                participantsCount="100"
                memberText="Members"
                moduleCount="8"
                moduleText="Modules"
              />
            </Grid>
            <Grid item>
              <IconCard
                iconName={faUsers}
                subject="Economics"
                name="John Doe"
                year="2022 A/L"
                participantsCount="100"
                memberText="Members"
                moduleCount="8"
                moduleText="Modules"
              />
            </Grid>
            <Grid item>
              <IconCard
                iconName={faUsers}
                subject="Economics"
                name="John Doe"
                year="2022 A/L"
                participantsCount="100"
                memberText="Members"
                moduleCount="8"
                moduleText="Modules"
              />
            </Grid>
            <Grid item>
              <IconCard
                iconName={faUsers}
                subject="Economics"
                name="John Doe"
                year="2022 A/L"
                participantsCount="100"
                memberText="Members"
                moduleCount="8"
                moduleText="Modules"
              />
            </Grid>
            <Grid item>
              <IconCard
                iconName={faUsers}
                subject="Economics"
                name="John Doe"
                year="2022 A/L"
                participantsCount="100"
                memberText="Members"
                moduleCount="8"
                moduleText="Modules"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GroupPage
