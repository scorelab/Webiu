import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import {GithubCard} from "../GithubCard"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const GithubUser = ({username, title, auth_token}) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userFetchUrl = `https://api.github.com/users/${username}?access_token=${auth_token}`
    setLoading(true)
    fetch(userFetchUrl, { 
      method: 'GET', 
      headers: new Headers({
        'Authorization': auth_token, 
        'Content-Type': 'application/json'
    })})
    .then((res) => res.json()).then((data) => {
      setUser(data)
      setLoading(false)
    })
    .catch((err) => { throw err });
  }, [username, auth_token])

  return (
    <div className="github-user-component">
      {title ? <div className="header-component">
        <h2><FontAwesomeIcon className="icon" icon={faGithub} /> {title}</h2>
      </div> : null}
      {user && !user.message ? 
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
      : <div style={{textAlign: "center"}}><h2>User Not Found, Please Check the Username or the Auth Token</h2></div>}   
    </div>
  )
}

GithubUser.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  auth_token: PropTypes.string
}