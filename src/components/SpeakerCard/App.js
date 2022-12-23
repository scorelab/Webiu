import React from "react"
import PropTypes from "prop-types"
import  "./App.sass"


export const SpeakerCard = ({title , subText , cardData , emptyMessage}) => {
    return(
          <div className="SpeakerCardFifth">
          <div className="SpeakerCardHeadingWrapper">
            <p className="SpeakerCardTitle">{title}</p>
            <h1 className="SpeakerCardSubText">{subText}</h1>
          </div>
          {cardData?.length > 0 ? (
            <div className="cardItem">
              {cardData.map((item, index) => {
                return (

                  <div className="CardTextOver">


                        <img src={item.image}

                          alt={item.title}
                        />
                    <div className="caption">

                    <p className="caption1">{item.title}  </p>
                    <p className="caption2">{item.designation}</p>


                  </div >

                  </div>

                )
              })}
            </div>
          ): (
            <p className="emptyMessage"> {emptyMessage} </p>
          )}
          </div>

    )
}


SpeakerCard.propTypes = {
    title: PropTypes.string,
    subText: PropTypes.string,
    cardData: PropTypes.array,
    emptyMessage: PropTypes.string,
}
