import React, {useState} from "react"
import PropTypes from "prop-types"
import {Container, Row, Col, Modal } from 'react-bootstrap'
import TeamListItem from './TeamListItem'
import "./style.sass"
import {SearchBar} from "../SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const Team = ({ title, showSearchBar, heads, contributors, researchers, alumni }) => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(contributors);
  const [name, setName] = useState(null);
  const [position, setPosition] = useState(null);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  const handleClick = (name, position, image) => {
    setName(name);
    setPosition(position);
    setImage(image)
    setShow(true);
  }

  const handleSearch = async (searchItem) => {
    const results = contributors.filter(contributor =>
      contributor.name.toLowerCase().includes(searchItem)
    );
    setSearchItem(searchItem);
    setSearchResults(results);
  }

  return (
    <div className="team-component">

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
           <div style={{textAlign: "center"}}>
             <img src={image} alt="profile" className="team-img" />
             <div><h4 className="team-title">{name}</h4></div>
             <div><p className="team-position">{position}</p></div>
           </div>
        </Modal.Body>
      </Modal>

      {title ? 
        <div className="header-component">
          <h2><FontAwesomeIcon icon={faUsers} className="icon-h2" /> {title}</h2>
        </div> 
      : null}
      <Container>
        {!heads || (
          <div>
            <h3>Heads</h3>
            <Row>
              {heads.map((item, i) => (
                <Col md={6} key={i} className="team-column" 
                     onClick={() => handleClick(item.name, item.title, item.image)}>
                  <TeamListItem 
                    name={item.name}
                    title={item.title}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}
        <br />

        {!researchers || 
          <div>
            <h3>Researchers</h3>
            <Row>
              {researchers.map((item, i) => (
                <Col md={4} sm={6} key={i} className="team-column" 
                     onClick={() => handleClick(item.name, item.title, item.image)}>
                  <TeamListItem 
                    name={item.name}
                    title={item.title}
                    horizontal
                  />
                </Col>
              ))}
            </Row>
            <br />
          </div>
        }

        {!alumni || 
          <div>
            <h3>Alumni</h3>
            <Row>
              {alumni.map((item, i) => (
                <Col md={4} sm={6} key={i} className="team-column" 
                     onClick={() => handleClick(item.name, item.title, item.image)}>
                  <TeamListItem 
                    name={item.name}
                    title={item.title}
                    horizontal
                  />
                </Col>
              ))}
            </Row>
            <br />
          </div>
        }

        {!contributors ||
          <div>
            <div className="team-search-div">
              <h3>Contributors</h3> 
              <div className="contributors-search">
                {showSearchBar ? 
                  <SearchBar input={searchItem} handleSearch={handleSearch} placeHolder="Search Contributors" />
                : null}
              </div>
            </div>
            <Row>
              {searchResults.map((item, i) => (
                <Col md={3} sm={4} key={i} className="team-column" 
                     onClick={() => handleClick(item.name, item.title, item.image)}>
                  <TeamListItem 
                    name={item.name}
                    title={item.title}
                    horizontal
                  />
                </Col>
              ))}
            </Row>
            <br />
          </div>
        }

      </Container>
    </div>
  )
}

Team.propTypes = {
  heads: PropTypes.array,
  researchers: PropTypes.array,
  alumni: PropTypes.array,
  contributors: PropTypes.array,
  title: PropTypes.string,
  showSearchBar: PropTypes.bool
}
