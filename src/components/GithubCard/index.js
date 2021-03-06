import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import moment from "moment";

export const GithubCard = ({ name, username, description, twitter, email, image, url, blog, location, from, repo }) => {
  return (
    <div>
      <div className="card">
        {image ? <div className="card-img-div">
          <img src={image} alt="Profile-img" className="card-img" />
        </div> : null}
        {name ? <h4 className="card-title">
          {name}
        </h4> : null}
        {username ? <p className="card-para">
          {'@' + username}
        </p> : null}
        {description ? <p className="card-para">
          {description}
        </p> : null}
        {location ? <p className="card-para">
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{color:'#51ad28'}} /> {location}
        </p> : null}
        <p className="card-para">
          {url ? <Link to={url} className="btn">GitHub</Link> : null}
          {blog ? <Link to={blog} className="btn">Blog</Link> : null}
        </p>
        {repo ? <p className="card-para">
          {repo} Repositories
        </p> : null}
        {from ? <p className="card-para">
          Active since <span className="active-since">{moment(from).format("MMMM Do YYYY")}</span>
        </p> : null}
        {twitter ? <div style={{ margin: "5px 0 0 10px" }}>
            <a className="anchor" href={`https://twitter.com/${twitter}`}><FontAwesomeIcon icon={faTwitter} style={{color:'#377293'}} /></a>
        </div> : null}
        {email ? <div style={{ margin: "5px 0 0 15px" }}>
            <a className="anchor" href={`mailto:${email}`}><FontAwesomeIcon icon={faEnvelope} style={{color:'#377293'}} /></a>
        </div> : null}
      </div>
    </div>
    )
}

GithubCard.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    blog: PropTypes.string,
    twitter: PropTypes.string,
    url: PropTypes.string,
    from: PropTypes.string,
    location: PropTypes.string,
    repo: PropTypes.string,
    email: PropTypes.string
}