import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Container, Row } from "react-bootstrap"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCubes } from "@fortawesome/free-solid-svg-icons"

export const GithubOrgMembers = ({orgname, title, auth_token, limit}) => {

  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState(null)

  useEffect(() => {
    const membersFetchUrl = `https://api.github.com/orgs/${orgname}/members`
    setLoading(true)
    fetch(membersFetchUrl, {headers: {'Authorization' : auth_token}})
    .then((res) => res.json()).then((data) => {
      setMembers(data)
      setLoading(false)
    })
    .catch((err) => { throw err });
  }, [orgname, auth_token])

  return (
    <div className="github-members-component">
      {title ? <div className="header-component">
        <h2><FontAwesomeIcon className="icon" icon={faGithub} /> {title} {orgname}</h2>
      </div> : null}
      {members && !members.message ? 
      <Container>
        {loading && <p>Fetching the profile</p>}
        <div style={{textAlign: "center"}}>
            <p className="member-para"><FontAwesomeIcon className="icon" icon={faCubes} /> The Building Blocks of {orgname}</p>
        </div>
        <Row>
            {members.map((member, index) => {
                if(index < limit){
                    return (
                        <div className="member-card" key={index} onClick={() => window.open(member.html_url, "_blank")}>
                            <div><img src={member.avatar_url} alt="Profile-img" className="member-img" /></div>                      
                            <p className="member-title">{member.login}</p>
                        </div>
                    )
                }               
            })}
        </Row>
      </Container>  
      : <div style={{textAlign: "center"}}><h2>Organization Not Found, Please Check the orgname</h2></div>}   
    </div>
  )
}

GithubOrgMembers.propTypes = {
  orgname: PropTypes.string,
  title: PropTypes.string,
  auth_token: PropTypes.string,
  limit: PropTypes.number
}