import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav } from "react-bootstrap"
import "./style.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

export const NavBarThemeFour = ({ logo, links, logoStyle, PhoneText }) => {
  return (
    <div className="navbarFourWrapper">
      <Navbar expand="lg">
        <div className="logoContainer" style={logoStyle}>
          <a href="/">
            <img className="Mainlogo" src={logo} alt="logo" />
          </a>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="MobileToggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center" style={{ width: "100%" }}>
            {links.map(link => (
              <Nav.Link
                href={link.path}
                target="_blank"
                className={link.isActive ? "isActive" : ""}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <a href="tel:${PhoneText}">
            <span className="PhoneDiv">
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </p>
              <p className="PhoneText">{PhoneText}</p>
            </span>
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

NavBarThemeFour.propTypes = {
  logo: PropTypes.string,
  PhoneText: PropTypes.string,
  links: PropTypes.array,
  logoStyle: PropTypes.object,
}
