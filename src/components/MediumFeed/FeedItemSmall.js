import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {navigate} from "gatsby"

const FeedItemSmall = ({title, publishedDate, author, image, slug}) => {
  return (
    <div className="feed-item-small-component" onClick={() => window.open(slug, "_blank")}>
      <img className= "image" alt="medium" src={image.includes("cdn-images") ? image : '/images/placeholder.png'} />
      <div>
        <p className="post-title">{title}</p>
        <p className="post-published-date">Published on {publishedDate} <span className="new-span">NEW</span> </p> 
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