import React, { useState } from "react"
import PropTypes from "prop-types"
import {Container} from 'react-bootstrap'
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faSlidersH } from '@fortawesome/free-solid-svg-icons';

export const Carousel = ({data, header}) =>  {

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const previousSlide = () => {
		const lastIndex = data.length - 1;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

		setCurrentImageIndex(index);
	}

	const nextSlide = () => {
		const lastIndex = data.length - 1;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		setCurrentImageIndex(index);
	}

    const ImageSlide = ({ url }) => {
        return (
          <div className="image-slide">
            <div className="slider-image-div">
              <img className="slider-image" src={url.image} alt="slider-logo" />
            </div>
            <div className="slider-title">
              <h4>{url.title}</h4><hr />
            </div>           
            <div className="slider-content">
              <p>{url.content}</p>
            </div>
          </div>
        );
    }

    return (
        <div>
        {header ? <div className="header-component">
            <h1><FontAwesomeIcon className="icon" icon={faSlidersH} /> {header}</h1>
        </div> : null}
        <Container>
            {data ? <div className="carousel">
                <FontAwesomeIcon className="icon icon-left" icon={faArrowLeft} onClick={previousSlide} />
                <ImageSlide url={ data[currentImageIndex] } />
                <FontAwesomeIcon className="icon icon-right" icon={faArrowRight} onClick={nextSlide} />
            </div> : null}
        </Container>
        </div>
    );
}

Carousel.propTypes = {
    header: PropTypes.string,
    data: PropTypes.array
}