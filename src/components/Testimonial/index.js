import React, { useState } from "react"
import PropTypes from "prop-types"
import {Container} from 'react-bootstrap'
import "./style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faComments } from '@fortawesome/free-solid-svg-icons';

export const Testimonial = ({data, header}) =>  {

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
            <div>
              <div className="pn_testimonial_box">
                <p className="test-description text-justify">{url.description}</p>
                <div className="row">
                    <div className="col-md-6 pn_review_profile">
                      <img src={url.image} className="border-radius-12 float-right" alt="client" /> 
                      <span className="test-user">{url.name}</span> 
                    </div>
                    <div className="col-md-6 pn_review_rating d-flex justify-content-end"> 
                      5 &nbsp; 
                      <img className="image-radius aligncenter"
                           src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" 
                           alt="client-stars" /> 
                    </div>
                </div>
              </div>
            </div>
        );
    }

    return (
        <div>
        {header ? <div className="header-component">
            <h1><FontAwesomeIcon className="icon" icon={faComments} /> {header}</h1>
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

Testimonial.propTypes = {
    header: PropTypes.string,
    data: PropTypes.array
}