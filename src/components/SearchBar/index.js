
import React ,  {useState} from "react"
import PropTypes from "prop-types"
import "./SearchBar.css"
import { propTypes } from "react-bootstrap/esm/Image"


export const SearchBar = ({ handleSearch , styles = {} , placeholder='Search'}) => {
   const [searchField , setSearchField] = ('')
   
  return (
    <>
      <style>{styles}</style>
      <div id="cover">
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder={placeholder}
                required
                value = {searchField}
                onChange={(e)=>setSearchField(e.target.value)}
              />
            </div>
            <div className="td" id="s-cover">
              <button onClick={handleSearch} type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

SearchBarComponent.propTypes = {
  handleSearch: PropTypes.func,
  placeholder:propTypes.string,
}


