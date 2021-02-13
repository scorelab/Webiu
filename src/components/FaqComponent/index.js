import React from "react"
import PropTypes from "prop-types"
import Faq from 'react-faq-component';
import {Container, Row, Col} from 'react-bootstrap'
import "./style.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export const FaqComponent = ({data}) => {

  return (
    <div>
      <div className="header-component">
        <h3><FontAwesomeIcon className="icon" icon={faQuestionCircle} />{data.title}</h3>
      </div>
      <Container>
      <div>
        <Faq data={data}/>
      </div>
      </Container>
    </div>
  )
}
