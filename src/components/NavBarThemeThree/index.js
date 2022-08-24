import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, Button } from "react-bootstrap"
import "./style.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const NavBarThemeThree = ({
  logo,
  links = [],
  logoStyle,
  ButtonLink,
  ButtonText,
}) => {
  return (
    <div className="navBarThemeThree-wrap">
      <Navbar className="nav-bar-custom" expand="lg">
        <div className="logo-container" style={logoStyle}>
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
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
          <a href={ButtonLink}>
            <Button type="button" className="transparentButton">
              {ButtonText}{" "}
              <FontAwesomeIcon className="navIcon" icon={faArrowRight} />
            </Button>
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

NavBarThemeThree.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.array,
  logoStyle: PropTypes.object,
  ButtonLink: PropTypes.string,
  ButtonText: PropTypes.string,
}
