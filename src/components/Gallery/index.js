import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container } from "react-bootstrap"

export const Gallery = ({ subText, mainText, data }) => {
  return (
    <Container>
      <div className="galleryHeadingsDiv">
        <p className="gallerySubText">{subText}</p>
        <h1 className="galleryMainHeading">{mainText}</h1>
      </div>
      {data?.length > 0 ? (
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div className="pics" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            )
          })}
        </div>
      ) : (
        <p className="emptyMessage"> No Pictures Available </p>
      )}
    </Container>
  )
}

Gallery.propTypes = {
  subText: PropTypes.string,
  mainText: PropTypes.string,
  data: PropTypes.array,
}
