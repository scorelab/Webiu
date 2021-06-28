import React from "react";
import PropTypes from "prop-types"
import Accordion from "./Accordion";
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import "./style.sass";

export const Faq = ({data, header, bgColor, toggleColor, titleColor}) => {
  return (
    <div>
    {header ?
      <div className="header-component">
       <h3>
         {header} <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
        </h3>
      </div>
     : null}
    <Container className="faq-container">
      {data.length >=1 ? data.map(faq => (
        <div>
            <Accordion
              title={faq.title}
              content={faq.content}
              bgColor={bgColor}
              toggleColor={toggleColor}
              titleColor={titleColor}
            />
            <hr style={{borderWidth: "0"}} />
        </div>
      )) : null}
    </Container>
    </div>
  );
}

Faq.propTypes = {
  data: PropTypes.array,
  header: PropTypes.string,
  bgColor: PropTypes.string,
  toggleColor: PropTypes.string,
  titleColor: PropTypes.string
}