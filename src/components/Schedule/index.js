import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container } from "react-bootstrap"

export const Schedule = ({ subText, mainText, daysList, itemsList }) => {
  return (
    <div className="schedule-container">
      <Container>
        <div className="scheduleHeadingsDiv">
          <p className="scheduleSubText">{subText}</p>
          <h1 className="scheduleMainHeading">{mainText}</h1>
        </div>
        {daysList?.length > 0 ? (
          <div className="datesList">
            {daysList.map((dayObj, index) => (
              <div className="dayinfo">
                <h4 className="day">{dayObj.day}</h4>
                <p className="date">{dayObj.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="emptyMessage"> No Scheduled Dates </p>
        )}
        {itemsList?.length > 0 ? (
          <div className="eventsList">
            {itemsList.map(item => (
              <div className="eventContainer">
                <div className="imageContainer">
                  <img
                    src={item.imageUrl}
                    alt={item.speaker}
                    className="speakerImage"
                  />
                </div>
                <div className="eventData">
                  <h5 className="eventTitle">{item.title}</h5>
                  <p className="eventSubtitle">
                    <span>
                      by<span className="speakerName">{item.speaker}</span>
                    </span>
                    <span className="slash">/</span>
                    <span className="speakerPosition">{item.position}</span>
                  </p>
                  <a
                    href={item.pageUrl}
                    className="viewMoreLink tabletLink"
                    target="_blank"
                  >
                    <button className="viewMoreBtn">View More</button>
                  </a>
                </div>
                <a
                  href={item.pageUrl}
                  className="viewMoreLink nonTabletLink"
                  target="_blank"
                >
                  <button className="viewMoreBtn">View More</button>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="emptyMessage"> No Scheduled Plans </p>
        )}
      </Container>
    </div>
  )
}

Schedule.propTypes = {
  subText: PropTypes.string,
  mainText: PropTypes.string,
  daysList: PropTypes.array,
  itemsList: PropTypes.array,
}
