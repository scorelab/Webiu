import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchBarComponent = ({handleSearch, placeHolder, header}) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  }

  return (
      <div>
       {header ? <div>
                  <div className="header-component"><h1>{header}</h1></div>
                  <div className="search-box">
                   <input
                    className="search-input"
                    type="text"
                    placeholder={placeHolder}
                    value={searchItem}
                    onChange={handleChange} />

                    <FontAwesomeIcon
                    onClick={() => handleSearch(searchItem)}
                    className="icon"
                    icon={faSearch} />

                  </div>
                 </div> :

                 <div>
                  <input
                   className="search-input"
                   type="text"
                   placeholder={placeHolder}
                   value={searchItem}
                   onChange={handleChange} />

                   <FontAwesomeIcon
                   onClick={() => handleSearch(searchItem)}
                   className="icon"
                   icon={faSearch} />

                 </div>}
      </div>
  )
}

SearchBarComponent.propTypes = {
  handleSearch: PropTypes.func,
  placeHolder: PropTypes.string,
  header: PropTypes.string
}
