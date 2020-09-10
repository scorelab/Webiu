import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'
import "./style.sass"

const FeedItemSmall = ({title, publishedDate, author, image, slug}) => {
  return (
    <div className="medium-feed-item-small-component" onClick={() => window.open(slug, "_blank")}>
      <img className= "image" alt="medium" src={image.includes("cdn-images") ? image : './images/mediumPlaceholder.png'} />
      <div>
        <p className="post-title">{title}</p>
        <p className="post-published-date">
          <b>Published on</b> {moment(publishedDate).format("MMMM Do YYYY, h:mm A")}{' '}
          {moment().diff(moment(publishedDate), "days") <= 7 ? <span className="new-span">NEW</span> : null}
        </p> 
        <p className="post-published-author">@{author}</p>
      </div>
    </div>
  )
}

FeedItemSmall.propTypes = {
  title: PropTypes.string,
  publishedDate: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
}

export default FeedItemSmall