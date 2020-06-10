import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {navigate} from "gatsby"

const FeedItem = ({title, publishedDate, author, image, slug}) => {
  return (
    <div className="feed-item-component" onClick={() => navigate(slug)}>
      <img className= "image" alt="medium" src={image.includes("cdn-images") ? image : '/images/placeholder.png'} />
      <div>
        <p className="post-title">{title}</p>
        <p className="post-published-date">Published on {publishedDate} <span className="new-span">NEW</span> </p> 
        <p className="post-published-author">@{author}</p>
      </div>
    </div>
  )
}

FeedItem.propTypes = {
}

export default FeedItem