import React, {useState} from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = ({handleSearch, placeHolder, header}) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  }

  return (
      <div>
       <div>
        {header ? <div className="header-component"><h2>{header}</h2></div> : null}
        <div className="search-box">
        <input
            className="search-input"
            type="text"
            placeholder={placeHolder}
            value={searchItem}
            onChange={handleChange} 
        />
        <FontAwesomeIcon
            onClick={() => handleSearch(searchItem)}
            className="icon"
            icon={faSearch} 
        />
        </div>
        </div>
      </div>
  )
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  placeHolder: PropTypes.string,
  header: PropTypes.string
}