import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from "react-helmet"

export const SocialMedia = ({facebookProfile, twitterProfile, header, width, height}) => {
  const facebookEmbedLink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F
                             ${facebookProfile}%2F&tabs=timeline&width=340&height=500&small_header=false&
                             adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

  const twitterEmbedLink = `https://twitter.com/${twitterProfile}?ref_src=twsrc%5Etfw`;

  return (
    <div className="embed-component">
      { header ? 
        <div className="header-component">
         <h3><FontAwesomeIcon className="icon-h2" icon={faFacebook} /> {header}</h3>
        </div>
       : null }
      <div>
      <div className="embed-div">
        <Row className="embed-row">
          {facebookProfile ? <Col md={6} className="embed-col">
            <div className="embed-facebook">
              <iframe src={facebookEmbedLink} width={width} height={height}
                      style={{border:"none", overflow: "hidden"}} scrolling="no" 
                      frameborder="0" allowfullscreen="true" title="Facebook-Profile"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
            </div>
          </Col> : null}
          {twitterProfile ? <Col md={6} className="embed-col">
            <div style={{width: width, height: height}} className="embed-twitter">
                <a class="twitter-timeline twitter-feed" width={width} 
                   height={height} href={twitterEmbedLink}>
                   Tweets by {twitterProfile}
                </a>
            </div>
            <Helmet style={{width: width, height: height}}>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Helmet>
          </Col> : null}
        </Row>
      </div>
      </div>
    </div>
  )
}

SocialMedia.propTypes = {
  facebookProfile: PropTypes.string,
  twitterProfile: PropTypes.string,
  header: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}