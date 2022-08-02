import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { Container } from "react-bootstrap"

export const NewsFeed = ({
  mainFeedGenre,
  mainFeedDate,
  mainFeedDescription,
  mainFeedComment,
  mainFeedlikes,
  sideFeedGenre,
  sideFeedDate,
  sideFeedDescription,
  sideFeedComment,
  sideFeedlikes,
  image,
}) => {
  return (
    <Container>
      <div className="news-wrapper">
        <article style={{ backgroundImage: `url(${image})` }}>
          <div className="main-feed-content">
            <div>
              <span className="main-feed-genre">{mainFeedGenre} </span>
              <span className="main-feed-date">{`| ${mainFeedDate}`}</span>
            </div>
            <p className="main-feed-description">{mainFeedDescription}</p>
            <span>
              <span className="main-feed-data">
                <p className="feed-icon">
                  <FontAwesomeIcon icon={faComment} />
                </p>
                {mainFeedComment}
              </span>
              <span className="main-feed-data">
                <p className="feed-icon">
                  <FontAwesomeIcon icon={faHeart} />
                </p>
                {mainFeedlikes}
              </span>
            </span>
          </div>
        </article>
        <section class="side-feed">
          <img
            src="https://user-images.githubusercontent.com/64387054/179511010-612803ca-2a9d-49a3-b1ec-9281b3849b2f.png"
            className="image-side-feed"
          />
          <div className="side-feed-content">
            <span className="side-feed-genre">{sideFeedGenre}</span>
            <span className="side-feed-date">{` | ${sideFeedDate}`}</span>
          </div>
          <p className="side-feed-description">{sideFeedDescription}</p>
          <hr className="news-divider"/>
          <span className="side-feed-content">
            <span className="side-feed-data">
              <p className="feed-icon">
                <FontAwesomeIcon icon={faComment} />
              </p>
              {sideFeedComment}
            </span>
            <span className="side-feed-data">
              <p className="feed-icon">
                <FontAwesomeIcon icon={faHeart} />
              </p>
              {sideFeedlikes}
            </span>
          </span>
        </section>
      </div>
    </Container>
  )
}

NewsFeed.propTypes = {
  mainFeedGenre: PropTypes.string,
  mainFeedDate: PropTypes.string,
  mainFeedDescription: PropTypes.string,
  mainFeedComment: PropTypes.string,
  mainFeedlikes: PropTypes.string,
  sideFeedGenre: PropTypes.string,
  sideFeedDate: PropTypes.string,
  sideFeedDescription: PropTypes.string,
  sideFeedComment: PropTypes.string,
  sideFeedlikes: PropTypes.string,
  image: PropTypes.string,
}
