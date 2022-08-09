import React, { useState } from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import SearchBar from "./searchBar"
import GroupCategory from "./groupCategory"
import IconCard from "./iconCard"
import { faUsers, faUserGear } from "@fortawesome/free-solid-svg-icons"
import groups from "../../../assets/data/group-list"
import myGroups from "../../../assets/data/my-group-list"
import Styles from "./styles"

const GroupPage = () => {
  const [query, setQuery] = useState("")
  const [groupList, setGroupList] = useState(groups)
  const [filteredData, setFilteredData] = useState(groupList)
  const classes = Styles()

  const searchHandler = () => {
    const result = groupList.filter(item => {
      return (
        item.subject.toLowerCase().search(query.trim().toLowerCase()) !== -1
      )
    })
    setFilteredData(result)
  }

  const groupCards = filteredData.map(item => {
    const isMember = myGroups.some(data => {
      if (data.id == item.id) {
        return true
      }
    })
    return (
      <Grid item>
        <IconCard
          iconName={faUsers}
          subject={item.subject}
          name={item.name}
          year={item.year}
          participantsCount={item.participantsCount}
          memberText={item.memberText}
          moduleCount={item.moduleCount}
          moduleText={item.moduleText}
          onClickHandler={
            isMember
              ? () =>
                  navigate(
                    `${item.subject.toLowerCase()}${item.year.slice(2, 4)}`
                  )
              : null
          }
          isMember={isMember}
        />
      </Grid>
    )
  })
  return (
    <Grid container direction="row" classes={{ root: classes.container }}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4">Groups in "UOM ISTITUTE"</Typography>
          </Grid>
          <Grid item>
            <GroupCategory
              iconName={faUserGear}
              title="All Groups"
              onClickHandler={() => {
                setGroupList(groups)
                setFilteredData(groups)
                setQuery("")
              }}
            />
          </Grid>
          <Grid item>
            <GroupCategory
              iconName={faUsers}
              title="My Groups"
              onClickHandler={() => {
                setGroupList(myGroups)
                setFilteredData(myGroups)
                setQuery("")
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Grid container direction="column" classes={{ root: classes.wrapper }}>
          <Grid item>
            <SearchBar
              placeHolder="Search for groups...."
              handleSearch={searchHandler}
              queryHandler={e => {
                setQuery(e.target.value)
              }}
              queryValue={query}
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            classes={{ root: classes.cardGroup }}
          >
            {groupCards}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GroupPage
