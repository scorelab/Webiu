import React from "react"
import PropTypes from "prop-types"
import Card from "react-bootstrap/Card"
import "./style.sass"

export const NewsCard = ({
  image,
  mainText,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <Card className="newsCardWrap" style={{ width: "18rem" }}>
      <Card.Img className="newsCardImage" variant="top" src={image} />
      <Card.Body>
        <Card.Title className="newsCardTitle">{mainText}</Card.Title>
        <Card.Text className="newsCardText">{description}</Card.Text>
        {buttonText ? (
          <a href={buttonLink}>
            <button className="newsCardBtn">{buttonText}</button>
          </a>
        ) : null}
      </Card.Body>
    </Card>
  )
}

NewsCard.propTypes = {
  image: PropTypes.string,
  mainText: PropTypes.string,
  description: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}
