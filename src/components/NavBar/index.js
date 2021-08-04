import React from "react"
import PropTypes from "prop-types"
import {Navbar, Nav} from 'react-bootstrap'
import {Link, withPrefix} from "gatsby"
import './style.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
          {links.map((link) => !link.isExternal ? (
            <Nav.Link 
              key={link.path}
              as={Link} 
              to={link.path} 
              className={link.isSpecial ? "special" : ""}
              style={{backgroundColor: null}}
            >
              {link.name}
            </Nav.Link>
          ) : (
            <Nav.Link 
              href={link.path} 
              target="_blank" 
              className={link.isSpecial ? "special" : ""}
            >
              {link.name} <FontAwesomeIcon icon={faExternalLinkAlt} className="nav-icon"/>
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