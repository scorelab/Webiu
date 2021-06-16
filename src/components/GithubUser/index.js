import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import {GithubCard} from "../GithubCard"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const GithubUser = ({username, title}) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userFetchUrl = `https://api.github.com/users/${username}`
    setLoading(true)
    fetch(userFetchUrl).then((res) => res.json()).then((data) => {
      setUser(data)
      setLoading(false)
    })
    .catch((err) => { throw err });
  }, [username])

  return (
    <div className="github-user-component">
      {title ? <div className="header-component">
        <h2><FontAwesomeIcon className="icon" icon={faGithub} /> GitHub Profile</h2>
      </div> : null} 
      <Container>
        {loading && <p>Fetching the profile</p>}
        {user ? 
          <GithubCard name={user.name} description={user.bio} 
                      twitter={user.twitter_username} image={user.avatar_url}
                      username={user.login} url={user.html_url}
                      location={user.location} repo={user.public_repos}
                      from={user.created_at} blog={user.blog} /> 
        : null}
      </Container>     
    </div>
  )
}

GithubUser.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string
}