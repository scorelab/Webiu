import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Container, Row } from "react-bootstrap"
import "./style.sass"
import { SearchBar } from "../SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"

export const GithubContributors = ({projectname, title, auth_token, limit, showSearchBar}) => {

  const [loading, setLoading] = useState(true)
  const [contributors, setContributors] = useState(null)
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(contributors)

  useEffect(() => {
    const contributorsFetchUrl = `https://api.github.com/repos/${projectname}/contributors?access_token=${auth_token}`
    setLoading(true)
    fetch(contributorsFetchUrl, { 
      method: 'GET', 
      headers: new Headers({
        'Authorization': auth_token, 
        'Content-Type': 'application/json'
    })})
    .then((res) => res.json()).then((data) => {
      setContributors(data)
      setSearchResults(data)
      setLoading(false)
    })
    .catch((err) => { throw err });
  }, [projectname, auth_token])

  const handleSearch = async (searchItem) => {
    const results = contributors.filter(contributor =>
      contributor.login.toLowerCase().includes(searchItem)
    );
    setSearchItem(searchItem);
    setSearchResults(results);
  }

  return (
    <div className="github-contributors-component">
      {title ? <div className="header-component">
        <h2><FontAwesomeIcon className="icon-h2" icon={faGithub} /> {title} {projectname}</h2>
      </div> : null}
      {contributors && !contributors.message ? 
      <Container>
        {loading && <p>Fetching the profile</p>}
        <div className="contributors-search">{showSearchBar ? <SearchBar input={searchItem} handleSearch={handleSearch} placeHolder="Search Contributors" />: null}</div>
        <Row>
            {searchResults && searchResults.map((member, index) => {
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
        <div style={{textAlign: "center"}}>
            <p className="member-para"><FontAwesomeIcon className="icon" icon={faCodeBranch} /> We value our Contributors!</p>
        </div>
      </Container>  
      : <div style={{textAlign: "center"}}><h2>Project Not Found, Please Check the Project name or the Auth-Token</h2></div>}   
    </div>
  )
}

GithubContributors.propTypes = {
  projectname: PropTypes.string,
  title: PropTypes.string,
  auth_token: PropTypes.string,
  limit: PropTypes.number,
  showSearchBar: PropTypes.bool
}