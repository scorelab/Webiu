import React from "react"
import PropTypes from "prop-types"
import {Navbar, Nav} from 'react-bootstrap'
import {Link, withPrefix} from "gatsby"
import './style.sass'

export const NavBar = ({logo, links = [], logoStyle}) => {
  return (
    <div className="nav-bar-component ">
      <Navbar className="nav-bar-custom" expand="lg">
      <div className="logo-container" style={logoStyle}>
        <Link to="/">
          <img className="logo" src={withPrefix(logo)} alt="logo"/>
        </Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{width: "100%"}}>
          {links.map((link) => (
            <Nav.Link 
              key={link.path}
              as={Link} 
              to={link.path} 
              className={link.isSpecial ? "special" : ""}
            >
              {link.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}


NavBar.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.array,
  logoStyle: PropTypes.object
}