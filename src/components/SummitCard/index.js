import React from "react";
import PropTypes from "prop-types"
import  "./style.sass"

import { Card } from "react-bootstrap";

export const SummitCard = ({title , subText , cardData , emptyMessage}) => {
    return(
      <div className="SummitCardWrapper">
          <div className="SummitCardHeadingWrapper">
            <p className="SummitCardTitle">{title}</p>
            <h1 className="SummitCardSubText">{subText}</h1>
          </div>
          {cardData?.length > 0 ? (
            <div className="cardItem">
              {cardData.map((item, index) => {
                return (
                  <Card>
                    <div className="cardImageDisplay">
                      <div className="imageWrapper">
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <h2 className="cardItemTitle">{item.title}</h2>
                    <p className="cardItemDescription">{item.description}</p>
                  </Card >
                )
              })}
            </div>
          ) : (
            <p className="emptyMessage"> {emptyMessage} </p>
          )}
      </div>
    )
}


SummitCard.propTypes = {
    title: PropTypes.string,
    subText: PropTypes.string,
    cardData: PropTypes.array,
    emptyMessage: PropTypes.string,
}