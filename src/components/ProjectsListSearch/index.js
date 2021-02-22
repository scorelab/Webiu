import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {navigate, withPrefix} from "gatsby"
import {SearchBarComponent} from '../SearchBarComponent'

export const ProjectsListSearch = ({title, items=[], limit, suffle = false}) => {
  const suffledItems = suffle ? items.sort(() => Math.random() - 0.5) : items

  const projectsList = suffledItems;

  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (item) => {
    setSearchItem(item);
  }

  useEffect(() => {
    const results = projectsList.filter(project =>
      project.title.toLowerCase().includes(searchItem)
    );
    setSearchResults(results);
  }, [searchItem]);

  return (
    <div className="project-list-component">
    {!title || (
      <div className="header-component">
      <Row>
        <Col md={6}>
          <h1 className="title">{title}</h1>
        </Col>
        <Col md={6}>
          <SearchBarComponent placeHolder="Search Items" handleSearch={handleSearch} />
        </Col>
      </Row>
      </div>
    )}
      <Container>

        <Row>
          {searchResults.length >= 1 ? searchResults.map((item) => (
            <Col md={4}>
            <div className="project-list-item-component" onClick={() => navigate(item.slug)}>
              <img className= "image" alt="project" src={withPrefix(item.image)} />
              <div>
                <p className= "item-title"> {item.title}</p>
                <p className= "item-descriptiom">
                  {item.description.slice(0, 220).trim()}
                  {item.description.length > 220 ? "..." : ""}
                </p>
              </div>
            </div>
            </Col>
          )) : <div><h4 className="not-found">Sorry! No such Project available :(</h4></div>}
        </Row>
        <Row>
          <Col className="view-all-btn-container">
            {!limit || <Link to={'/projects'} className="btn">Many More <FontAwesomeIcon icon={faArrowRight}/></Link>}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ProjectsListSearch.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  limit: PropTypes.number,
  suffle: PropTypes.bool,
}
