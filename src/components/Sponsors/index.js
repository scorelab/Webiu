import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container } from "react-bootstrap"

export const Sponsors = ({ subText, mainText, sponsorsList, messagesList }) => {
  return (
    <div className="sponsors-container">
      <Container>
        <div className="sponsorsHeadingsDiv">
          <p className="sponsorsSubText">{subText}</p>
          <h1 className="sponsorsMainHeading">{mainText}</h1>
        </div>
        {sponsorsList?.length > 0 ? (
          <div className="sponsorsList">
            {sponsorsList.map(sponsorObj => (
              <div className="sponsorContainer" key={sponsorObj.image}>
                <img
                  className="sponsorImg"
                  alt={sponsorObj.name}
                  src={sponsorObj.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="emptyMessage"> No Sponsors Available </p>
        )}
        {messagesList?.length > 0 && (
          <div className="messagesList">
            {messagesList.map(item => (
              <div className="messageContainer" key={item.image}>
                <h5 className="messageTitle">{item.text}</h5>
                <div className="speakerContainer">
                  <div className="imageContainer">
                    <img
                      src={item.image}
                      alt={item.speaker}
                      className="speakerImage"
                    />
                  </div>
                  <p className="speakerData">
                    <span className="speakerName">{item.speaker}</span>
                    <span className="speakerPosition">{item.position}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

Sponsors.propTypes = {
  subText: PropTypes.string,
  mainText: PropTypes.string,
  sponsorsList: PropTypes.array,
  messagesList: PropTypes.array,
}
