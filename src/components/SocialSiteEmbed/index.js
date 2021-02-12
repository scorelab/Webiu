import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col, Form} from 'react-bootstrap'

export const SocialSiteEmbed = ({facebookProfile, twitterProfile}) => {
  const facebookApi = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F
                       ${facebookProfile}
                       %2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;
  const twitterApi = `https://twitter.com/${twitterProfile}?ref_src=twsrc%5Etfw`;
  return (
    <div className="embed-component">
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <iframe src={facebookApi}
                      width="340" height="500" style={{border:"none", overflow: "hidden"}} scrolling="no" frameborder="0"
                      allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </Col>
          <Col md={6}>

            <a class="twitter-timeline" width="340" height="500" href={twitterApi}
               style={{border:"none", overflow: "hidden"}}>
            Tweets by {twitterProfile}</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

          </Col>
        </Row>
      </Container>
    </div>
  )
}


SocialSiteEmbed.propTypes = {
  facebookProfile: PropTypes.string,
  twitterProfile: PropTypes.string,
}
