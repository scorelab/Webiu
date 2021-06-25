import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Container, Row } from "react-bootstrap"
import "./style.sass"
import { SearchBar } from "../SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCubes } from "@fortawesome/free-solid-svg-icons"

export const GithubOrgMembers = ({orgname, title, auth_token, limit, showSearchBar}) => {

  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState(null)
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(members)

  useEffect(() => {
    const membersFetchUrl = `https://api.github.com/orgs/${orgname}/members?access_token=${auth_token}`
    setLoading(true)
    fetch(membersFetchUrl, { 
      method: 'GET', 
      headers: new Headers({
        'Authorization': auth_token, 
        'Content-Type': 'application/json'
    })})
    .then((res) => res.json()).then((data) => {
      setMembers(data)
      setSearchResults(data)
      setLoading(false)
    })
    .catch((err) => { throw err });
  }, [orgname, auth_token])

  const handleSearch = async (searchItem) => {
    const results = members.filter(member =>
      member.login.toLowerCase().includes(searchItem)
    );
    setSearchItem(searchItem);
    setSearchResults(results);
  }

  return (
    <div className="github-members-component">
      {title ? <div className="header-component">
        <h2>
          <FontAwesomeIcon className="icon-h2" icon={faGithub} /> {title} {orgname}
        </h2>
      </div> : null}
      {members && !members.message ? 
      <Container>
        {loading && <p>Fetching the profile</p>}
        <div className="contributors-search">
           {showSearchBar ? 
             <SearchBar input={searchItem} handleSearch={handleSearch} placeHolder="Search Members" />
            : null}
        </div>

        <Row>
            {searchResults &&  searchResults.map((member, index) => {
                if(index < limit){
                    return (
                        <div className="member-card" key={index} onClick={() => window.open(member.html_url, "_blank")}>
                            <div>
                              <img src={member.avatar_url} alt="Profile-img" className="member-img" />
                            </div>                      
                            <p className="member-title">{member.login}</p>
                        </div>
                    )
                }               
            })}
        </Row>
        <div style={{textAlign: "center", paddingBottom: "10px"}}>
            <p className="member-para">
              <FontAwesomeIcon className="icon" icon={faCubes} /> The Building Blocks of {orgname}
            </p>
        </div>
      </Container>  
      : <div style={{textAlign: "center"}}>
          <h2>Organization Not Found, Please Check the orgname or the Auth-Token</h2>
        </div>}   
    </div>
  )
}

GithubOrgMembers.propTypes = {
  orgname: PropTypes.string,
  title: PropTypes.string,
  auth_token: PropTypes.string,
  limit: PropTypes.number,
  showSearchBar: PropTypes.bool
}