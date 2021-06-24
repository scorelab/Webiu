import React from 'react'
import PropTypes from 'prop-types'
import "./style.sass"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import {Link} from "gatsby"

export const Card = ({ header, data }) => {

  return (
    <div className="card-component">
        {header ? <div className="header-component">
            <h1><FontAwesomeIcon className="icon" icon={faFile} /> {header}</h1>
        </div> : null}
        <Container>
           <Row>
           {data.map((data, index) => (
               <Col lg={4} key={index} className="card-col">
                   <div className="card-div">
                       <img src={data.image} className="card-img" />
                       <hr />
                       <div className="item-title"><h4 className="title-text">{data.title}</h4></div>
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
           </Row>
        </Container>
    </div>
  )
}
Card.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array
}