import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import { GithubCard } from "../GithubCard"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExclamation, faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import {Link} from "gatsby"


export const GithubOrg = ({orgname, limit, title}) => {

  const [orgLoading, setOrgLoading] = useState(true)
  const [reposLoading, setReposLoading] = useState(true)
  const [org, setOrg] = useState(null)
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const orgFetchUrl = `https://api.github.com/orgs/${orgname}`
    setOrgLoading(true)
    fetch(orgFetchUrl).then((res) => res.json()).then((data) => {
      setOrg(data)
      setOrgLoading(false)
    })
    .catch((err) => { throw err });

    const repoFetchUrl = `https://api.github.com/orgs/${orgname}/repos`
    setReposLoading(true)
    fetch(repoFetchUrl).then((res) => res.json()).then((data) => {
      setRepos(data)
      console.log(data);
      setReposLoading(false)
    })
    .catch((err) => { throw err });
  }, [orgname])

  return (
    <div className="github-org-component">
      {title ? <div className="header-component">
        <h2><FontAwesomeIcon className="icon" icon={faGithub} /> {title} {orgname}</h2>
      </div> : null}
      {org && !org.message ? 
      <Container>
        {orgLoading && <p>Fetching the profile</p>}
        {org ? 
          <GithubCard name={org.name} description={org.description} 
                      email={org.email} image={org.avatar_url}
                      username={org.login} url={org.html_url}
                      location={org.location} repo={org.public_repos}
                      from={org.created_at} blog={org.blog} /> 
        : null}
        <div style={{textAlign: "center"}}><h4>Repositories of {orgname}</h4></div>
        <hr />
        <div style={{textAlign: "center"}}>
            {reposLoading && <p>Fetching the Repos</p>}
            {repos.length > 1 ?
                <Row>
                    {repos.map((item, index) => {
                    if(index < limit) {
                        return (
                        <Col lg={3} key={index}>
                           <div className="repo-card">
                             <p className="repo-title">{item.name}</p>
                             {item.description ? <p className="card-para">
                               {item.description.length > 30 ? item.description.substring(0,29) + ".." : item.description}
                             </p> : null}
                             <p className="card-para">
                               <FontAwesomeIcon icon={faExclamation} style={{color:'#51ad28'}} /> {item.open_issues} Open Issues
                             </p>
                             <p className="card-para">
                               <FontAwesomeIcon icon={faCodeBranch} style={{color:'#51ad28'}} /> {item.forks} Forks
                             </p>
                             <Link to={item.html_url} className="btn">GitHub</Link>
                           </div> 
                        </Col>
                        )
                    }           
                    })}
                </Row> 
            : null}
        </div>
      </Container>
      :<div style={{textAlign: "center"}}><h2>Organization Not Found, Please Check the Org Name</h2></div>}     
    </div>
  )
}

GithubOrg.propTypes = {
  orgname: PropTypes.string,
  limit: PropTypes.number,
  title: PropTypes.string
}