import React from 'react'
import PropTypes from 'prop-types'
import "./style.sass"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {Link} from "gatsby"

export const Card = ({ header, data, card, services, buttonLink, buttonText }) => {

  return (
    <div className="card-component">
        {header ? <div className="header-component">
            <h2>
              <FontAwesomeIcon className="icon" icon={card ? faFile : faInfoCircle} /> {header}
            </h2>
        </div> : null}
        <Container>
           <Row>
           {card && data.map((data, index) => (
               <Col lg={4} key={index} className="card-col">
                   <div className="card-div">
                       <img src={data.image} className="card-img" alt="logo" />
                       <hr />
                       <div className="item-title">
                          <h4 className="title-text">{data.title}</h4>
                       </div>
                       <div className="item-description">
                          <p>{data.description}</p>
                       </div>
                       <div className="btn-center">                           
                            <Link to={data.buttonLink} className="btn">
                              {data.buttonText}
                            </Link>                            
                        </div>
                   </div>
               </Col>
           ))}
           {services && data.map((data, index) => (
               <Col lg={4} key={index} className="services-col">
                   <div className="services-div">
                       <img src={data.image} className="services-img" alt="logo" />
                       <div className="services-title">
                          <h5 className="services-text">{data.title}</h5>
                       </div>
                       <div className="services-description">
                          <p>{data.description}</p>
                       </div>
                   </div>
               </Col>
           ))}
           </Row>
           {services ? <div className="btn-center">                           
              <Link to={buttonLink} className="btn">
                {buttonText}
              </Link>                            
           </div> : null}
        </Container>
    </div>
  )
}
Card.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  card: PropTypes.bool,
  services: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
}