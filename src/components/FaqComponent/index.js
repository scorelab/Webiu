import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"
import Accordion from "./Accordion";
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import "./style.sass";

export const FaqComponent = ({data, header}) => {
  return (
    <div>
    { header ?
      <div className="header-component">
       <h3>{header} <FontAwesomeIcon className="icon" icon={faQuestion} /></h3>
      </div>
     : null }
    <Container className="faq-container">
      {data.length >=1 ? data.map(faq => (
        <Accordion
          title={faq.title}
          content={faq.content}
        />
      )) : null}
    </Container>
    </div>
  );
}

Faq.propTypes = {
  data: PropTypes.array,
  heading: PropTypes.string
}
