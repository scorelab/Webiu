import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'
import "./style.sass"
import LetterAvatar from "../LetterAvatar"

const MailingListFeedItem = ({image, author, title, description, publishedDate, slug}) => {
  return (
    <div className="mailing-list-feed-item-component" onClick={() => window.open(slug, "_blank")}>
      {image && image !== "" ? (
        <img className= "image" alt="medium" src={image} />
      ) : (
        <LetterAvatar name={author} />
      )}
      <div>
        <p className="post-published-author">{author}</p>
        <p className="post-published-date">
          {moment(publishedDate).format("MMMM Do YYYY, h:mm A")}{' '}
          {moment().diff(moment(publishedDate), "days") <= 7 ? <span className="new-span">NEW</span> : null}
        </p> 
        <p className="post-title">{title}</p>
        <p className="post-description">"{description}"</p>
      </div>
    </div>
  )
}

MailingListFeedItem.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description:  PropTypes.string,
  publishedDate: PropTypes.string,
  slug: PropTypes.string,
}

export default MailingListFeedItem