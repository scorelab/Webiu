import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const CardComponent = ({ header, name, description, content, facebook, twitter, instagram, linkedin, image }) => {
  return (
    <div>
    {header ? <div className="header-component"><h1 className="title">{header}</h1></div> : null}
    <div className="card">
    <div className="card-img-div">
    <img src={image} alt="Profile-img" className="card-img" />
    </div>
    <h4 className="card-h4">{name}</h4>
    <p className="card-title">{description}</p>
    <p className="card-p">{content}</p>
    <div style={{ margin: "15px 0" }}>
      <a className="anchor" href={twitter}><FontAwesomeIcon icon={faTwitter} style={{color:'#377293'}} /></a>
      <a className="anchor" href={linkedin}><FontAwesomeIcon icon={faLinkedin} style={{color:'#377293'}} /></a>
      <a className="anchor" href={facebook}><FontAwesomeIcon icon={faFacebook} style={{color:'#377293'}} /></a>
      <a className="anchor" href={instagram}><FontAwesomeIcon icon={faInstagram} style={{color:'#377293'}} /></a>
    </div>
    </div>
    </div>
  )
}


CardComponent.propTypes = {
  header: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  image: PropTypes.string
}
