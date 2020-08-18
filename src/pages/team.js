import React from "react"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import Team from '../components/Team'
import {useTeamData} from '../queries/team'
import { faUsers } from "@fortawesome/free-solid-svg-icons"

const TeamPage = () => {
  const team = useTeamData()

  return (
    <MainLayout>
      <SEO title="Score Labs Team Page" />
      <Header 
        mainText={team.title}
        icon={faUsers}
        backgroundColor={'#edffe2'}
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