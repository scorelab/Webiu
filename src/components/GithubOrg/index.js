import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import OrgCard from "./OrgCard"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export const GithubOrg = ({orgname}) => {

  const [loading, setLoading] = useState(true)
  const [org, setOrg] = useState(null)

  useEffect(() => {
    const orgFetchUrl = `https://api.github.com/orgs/${orgname}`
    setLoading(true)
    fetch(orgFetchUrl).then((res) => res.json()).then((data) => {
      setOrg(data)
      setLoading(false)
    })
    .catch((err) => { throw err });
  }, [orgname])

  return (
    <div className="medium-feed-component">
      <div className="header-component">
        <h2><FontAwesomeIcon className="icon" icon={faGithub} /> GitHub Profile of {orgname}</h2>
      </div> 
      <Container>
        {loading && <p>Fetching the profile</p>}
        {org ? 
          <OrgCard name={org.name} description={org.description} 
                    email={org.email} image={org.avatar_url}
                    username={org.login} url={org.html_url}
                    location={org.location} repo={org.public_repos}
                    from={org.created_at} blog={org.blog} /> 
        : null}
      </Container>     
    </div>
  )
}

GithubOrg.propTypes = {
  orgname: PropTypes.string
}