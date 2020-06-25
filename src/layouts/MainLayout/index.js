import React from "react"
import PropTypes from "prop-types"
import pages from '../../config/pages'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { useFooterData } from '../../queries/footer'
import { useNavigationBarData } from '../../queries/navigationBar'
import './style.sass'

const MainLayout = ({ children }) => {
  const footerData = useFooterData()
  const navigationBarData = useNavigationBarData()
    
  return (
      <div className="main-layout-component">
        <NavBar 
          logo={navigationBarData.logo}
          links={navigationBarData.pages}
        />
        <div className="content-area">
          {children}
        </div>
        <Footer 
          mainText={footerData.mainText}
          socialLinks={footerData.socialLinks}
        />
      </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
