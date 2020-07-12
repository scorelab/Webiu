import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import Team from '../components/Team'
import {useTeamData} from '../queries/team'

const TeamPage = () => {
  const team = useTeamData()

  console.log(team)

  return (
    <MainLayout>
      <SEO title="Score Labs Team Page" />
      <Header 
        mainText={team.title}
        small
      />
      <Team 
        heads={team.heads}
        researchers={team.researchers}
        alumni={team.alumni}
      />
    </MainLayout>
  )
}

export default TeamPage