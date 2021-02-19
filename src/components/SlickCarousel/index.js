import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlickCarousel = ({header, data}) => {
  var settings = {
    className: "slides",
    infinite: true,
    speed: 2000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
    {header ? <div className="header-component">
     <h3>{header}</h3>
    </div> : null}
    <Container>
    {data.length >= 1 ? <Slider {...settings}>
      {data.map(data => (
        <a href={data.link}>
         <div className="slick-div">
          <h5>{data.title}</h5>
          <img src={data.image} />
         </div>
        </a>
      ))}
    </Slider> : null}
    </Container>
    </div>
  )
}

SlickCarousel.propTypes = {
   header: PropTypes.string,
   data: PropTypes.array
}
