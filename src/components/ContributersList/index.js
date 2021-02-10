import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import "./styles.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap'

export const ContributersList = ({orgName}) => {
  const [data, setData] = useState([]);

   useEffect(async() => {
    const feedFetchUrl = `https://api.github.com/repos/${orgName}/contributors?anon=1`;
    fetch(feedFetchUrl).then((res) => res.json()).then((res) => {
      setData(res);
    })
  }, []);

  return (
    <div>
    <div className="header-component">
     <h3><FontAwesomeIcon className="icon" icon={faUsers} /> Contributers of {orgName}</h3>
    </div>
      <div className="project-list-component links-list-component">
         <Container>
         <Row>
          {data.map((item) => (
            <Col md={4} key={item.id}>
              <a href={item.html_url}><div className="project-list-item-component">
                <img className= "image" alt="project" src={item.avatar_url} />
                <div>
                  <p className= "item-title"> {item.login}</p>
                  <p className= "item-descriptiom">
                    Number of contributions: {item.contributions}
                  </p>
                  <p className= "item-descriptiom">
                    <a href={item.html_url}>Github URL</a>
                  </p>

                </div>
              </div></a>
            </Col>
          ))}
         </Row>
         </Container>
      </div>
      </div>
  )
}

ContributersList.propTypes = {
  orgName: PropTypes.string,
}
