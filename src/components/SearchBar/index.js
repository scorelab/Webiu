
import React from "react"
import "./SearchBar.css"

export const App = ({ onChange = null, styles = {} }) => {
  return (
    <>
      <style>{styles}</style>
      <div id="cover">
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder="Search"
                required
                onChange={onChange}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
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
