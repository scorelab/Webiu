import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { Col, Row, Container } from "react-bootstrap"
import FeedItem from './FeedItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.sass"
import { Link } from "gatsby"


export const MailingListFeed = ({title, feedUrl}) => {

  const [loading, setLoading] = useState(true)
  const [feed, setFeed] = useState(null)

  useEffect(() => {
    getFeed()
  }, [])
  
  const getFeed = () => {
    const feedFetchUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`
    setLoading(true)
    fetch(feedFetchUrl).then((res) => res.json()).then((data) => {
      setFeed(data)
      setLoading(false)
    })
    .catch((err) => { 
      throw err 
    });
  }

  const renderFeedItemList = () => (
    feed.items.map(item => (
      <Col md={12} key={item.guid}>
        <FeedItem
          image={item.thumbnail}
          author={item.author}
          title={item.title}
          description={item.description}
          publishedDate={item.pubDate}
          slug={item.link}
        />
      </Col>
    ))
  )

  return (
    <div className="mailing-list-feed-component">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="mailing-list-feed-title">{title}</h1>
          </Col>
          {loading || !feed ? <Col md={12}><p>Loading...</p></Col>: renderFeedItemList()}
        </Row>
        <Row>
        <Col className="view-all-btn-container">
          {loading || !feed ? null : <a href={feed.feed.link} className="btn" target="_blank">View All <FontAwesomeIcon icon={faArrowRight}/></a>}
        </Col>
      </Row>
      </Container>
    </div>
  )
}

MailingListFeed.propTypes = {
  title: PropTypes.string,
  feedUrl: PropTypes.string,
}