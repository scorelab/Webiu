import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = ({handleSearch, input, placeHolder, header}) => {
  return (
       <div>
          {header ? <div className="header-component">
                      <h2><FontAwesomeIcon icon={faSearch} className="icon-h2" /> {header}</h2></div> 
          : null}
          <div className="search-box">
          <input
              className="search-input"
              type="text"
              placeholder={placeHolder}
              value={input}
              onChange={(e) => handleSearch(e.target.value)} 
          />
          <FontAwesomeIcon
              onClick={() => {}}
              className="icon"
              icon={faSearch} 
          />
          </div>
        </div>
  )
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  input: PropTypes.string,
  placeHolder: PropTypes.string,
  header: PropTypes.string
}