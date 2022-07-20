import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, Button } from "react-bootstrap"
import "./style.sass"

export const NavBarThemeOne = ({
  logo,
  links = [],
  logoStyle,
  ButtonLink,
  ButtonText,
}) => {
  return (
    <div className="navbar-wrapper">
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
          <a href={ButtonLink}>
            <Button type="button" className="justify-content-end buttonCustom">
              {ButtonText}
            </Button>
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

NavBarThemeOne.propTypes = {
  logo: PropTypes.string,
  ButtonLink: PropTypes.string,
  ButtonText: PropTypes.string,
  links: PropTypes.array,
  logoStyle: PropTypes.object,
}
