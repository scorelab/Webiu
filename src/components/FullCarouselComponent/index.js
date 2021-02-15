import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container} from 'react-bootstrap'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const FullCarouselComponent = ({data}) => {

  return (

    <Container>
    <div className="carousel-div">
     <AwesomeSlider>
     {data.map(data => (
       <div className="carousel-content">
         <h1>{data.title}</h1>
         <p>{data.content}</p>
         <img src={data.image} />
       </div>
     ))}
     </AwesomeSlider>
     </div>
     </Container>

  )
}

FullCarouselComponent.propTypes = {
  data: PropTypes.array
}
