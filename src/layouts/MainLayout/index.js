import React from "react"
import PropTypes from "prop-types"
import NavBar from '../../components/NavBar'
import pages from '../../config/pages'
import './style.sass'

const MainLayout = ({ children }) => {
  return (
      <div className="main-layout-component">
        <NavBar 
          logo={'/logos/main-logo.jpeg'}
          links={pages}
        />
        <div className="content-area">
          {children}
        </div>
      </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
