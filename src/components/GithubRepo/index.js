import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import { GithubCard } from "../GithubCard"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faAsterisk, faCode, faHistory, faCodeBranch, faExclamation, faUser, faIdBadge } from "@fortawesome/free-solid-svg-icons"
import moment from "moment"


export const GithubRepo = ({ reponame, title }) => {

  const [loading, setLoading] = useState(true)
  const [repo, setRepo] = useState(null)

  useEffect(() => {
    const repoFetchUrl = `https://api.github.com/repos/${reponame}`
    setLoading(true)
    fetch(repoFetchUrl).then((res) => res.json()).then((data) => {
      console.log(data);
      setRepo(data)
      setLoading(false)
    })
    .catch((err) => { throw err });
  }, [reponame])

  return (
    <div className="github-repo-component">
      {title ? <div className="header-component">
        <h2><FontAwesomeIcon className="icon" icon={faGithub} /> {title}</h2>
      </div> : null}
      {repo && !repo.message ?
      <Container>
        {loading && <p>Fetching the details</p>}
        {repo ? 
          <GithubCard name={repo.name} description={repo.description.substring(0, 300)} 
                      image={repo.organization.avatar_url}
                      username={repo.full_name} url={repo.html_url}
                      from={repo.created_at} /> 
        : null}
        <div style={{textAlign: "center"}}>
            {loading && <p>Fetching the details</p>}
            {repo ?
                <Row>   
                  <Col lg={3}>
                    <div className="repo-card">
                      <p className="repo-title"><FontAwesomeIcon icon={faAsterisk} /> Owner</p>
                      <p className="card-para">{repo.owner.login}</p>
                    </div> 
                  </Col>
                  <Col lg={3}>
                    <div className="repo-card">
                      <p className="repo-title"><FontAwesomeIcon icon={faCode} /> Languages</p>
                      <p className="card-para">{repo.language}</p>
                    </div> 
                  </Col>
                  <Col lg={3}>
                    <div className="repo-card">
                      <p className="repo-title"><FontAwesomeIcon icon={faCodeBranch} /> No. of Forks</p>
                      <p className="card-para">{repo.forks}</p>
                    </div> 
                  </Col>
                  <Col lg={3}>
                    <div className="repo-card">
                      <p className="repo-title"><FontAwesomeIcon icon={faHistory} /> Last Updated</p>
                      <p className="card-para">{moment(repo.upadted_at).format("MMMM Do YYYY")}</p>
                    </div> 
                  </Col>
                  <Col lg={3}>
                    <div className="repo-card">
                      <p className="repo-title"><FontAwesomeIcon icon={faExclamation} /> Open Issues</p>
                      <p className="card-para">{repo.open_issues_count} Issues Opened</p>
                    </div> 
                  </Col>
                  <Col lg={3}>
                    <div className="repo-card">
                      <p className="repo-title"><FontAwesomeIcon icon={faUser} /> No. of Contributors</p>
                      <p className="card-para">{repo.subscribers_count}</p>
                    </div> 
                  </Col>
                  <Col lg={3}>
                    <div className="repo-card">
                      <p className="repo-title"><FontAwesomeIcon icon={faGithubAlt} /> default Branch</p>
                      <p className="card-para">{repo.default_branch}</p>
                    </div> 
                  </Col>
                  <Col lg={3}>
                    <div className="repo-card">
                      <p className="repo-title"><FontAwesomeIcon icon={faIdBadge} /> License</p>
                      <p className="card-para">{repo.license.name}</p>
                    </div> 
                  </Col>
                </Row> 
            : null}
        </div>
        
      </Container>    
      : <div style={{textAlign: "center"}}><h2>Repo Not Found, Please check the repo name</h2></div>} 
    </div>
  )
}

GithubRepo.propTypes = {
  reponame: PropTypes.string,
  title: PropTypes.string
}