import React, {useState} from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import ProjectListItem from './ProjectListItem'
import {Link} from "gatsby"
import {SearchBar} from "../SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";

export const ProjectsList = ({title, showSearchBar, searchPlaceHolder, items=[], limit, suffle = false}) => {
  const suffledItems = suffle ? items.sort(() => Math.random() - 0.5) : items

  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(suffledItems);

  const handleSearch = async (searchItem) => {
    const results = suffledItems.filter(item =>
      item.title.toLowerCase().includes(searchItem)
    );
    setSearchItem(searchItem);
    setSearchResults(results);
  }

  return (
    <div className="project-list-component">
      {!title || (
        <div className="header-component">
          <Row>
            <Col>
              <h2 className="title"><FontAwesomeIcon className="icon" icon={faCode} /> {title}</h2>
            </Col>
          </Row>
        </div>        
      )}
      {showSearchBar ? 
        <div className="projects-search">
            {showSearchBar ? <SearchBar input={searchItem} handleSearch={handleSearch} placeHolder={searchPlaceHolder} />: null}
        </div> 
      : null}
      <Container>      
        <Row>
          {searchResults.map((item, i) => !limit || i < limit ? (
            <ProjectListItem
              key={i}
              {...item}
            />
          ) : null)}
        </Row>
        <Row>
          <Col className="view-all-btn-container">
            {!limit || <Link to={'/projects'} className="btn-projects">Many More <FontAwesomeIcon icon={faArrowRight}/></Link>}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ProjectsList.propTypes = {
  title: PropTypes.string,
  showSearchBar: PropTypes.bool,
  searchPlaceHolder: PropTypes.string,
  items: PropTypes.array,
  limit: PropTypes.number,
  suffle: PropTypes.bool,
}