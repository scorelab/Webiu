import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Container, Row, Col} from 'react-bootstrap'
import "./style.sass"

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

  const Arrow = ({ direction, clickFunction, glyph }) => (
  	<div
  		className={ `slide-arrow ${direction}` }
  		onClick={ clickFunction }>
  		{ glyph }
  	</div>
  );

  const ImageSlide = ({ url }) => {
  	return (
  		<div className="image-slide">
        <img src={url.image} />
        <p>{url.content}</p>
      </div>
  	);
  }

		return (
      <div>
      {header ? <div className="header-component">
        <h1>{header}</h1>
      </div> : null}
      <Container>
			{data ? <div className="carousel">
				<Arrow direction="left" clickFunction={ previousSlide } glyph="&#9664;" />
				<ImageSlide url={ data[currentImageIndex] } />
				<Arrow direction="right" clickFunction={ nextSlide } glyph="&#9654;" />
			</div> : null}
      </Container>
      </div>
		);
}

Carousel.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array
}
