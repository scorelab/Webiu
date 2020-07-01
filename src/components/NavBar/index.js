import React from "react"
import PropTypes from "prop-types"
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from "gatsby"
import './style.sass'

const NavBar = ({logo, links = []}) => {
  return (
    <div className="nav-bar-component ">
      <Navbar className="nav-bar-custom" expand="lg">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo"/>
        </Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{width: "100%"}}>
          {links.map(link => (
            <Nav.Link>
              <Link to={link.path} className={link.isSpecial ? "special" : "normal"}>{link.name}</Link>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}


NavBar.propTypes = {
  logo: PropTypes.object,
  links: PropTypes.array
}


export default NavBar