import React from "react"
import PropTypes from "prop-types"
import {Container, Row, Col} from 'react-bootstrap'
import "./style.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchComponent = ({placeHolder, searchFunction}) => {

  return (
    <div>
      <div className="header-component">
       <Container>
       <input
        className="search-input"
        type="text"
        placeholder={placeHolder}
        value=""
        onChange={searchFunction} /> <FontAwesomeIcon className="icon" icon={faSearch} />
       </Container>
      </div>
    </div>
  )
}

SearchComponent.propTypes = {
  placeHolder: PropTypes.string,
}
