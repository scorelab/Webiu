import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, withPrefix } from "gatsby"
import {Container, Row, Col} from 'react-bootstrap'
import "./style.sass"

export const TimestampComponent = ({ image, firstName, buttonText, buttonLink }) => {

  const locale = 'en';
  const [today, setDate] = useState(new Date());

  useEffect(() => {
      const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
      return () => {
        clearInterval(timer);
      }
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });

  return (
    <div style={{ backgroundImage: `url(${withPrefix('/images/dots.png')})` }} className="about-component" >
      <Container>
          <Row>
            <Col md={6} className="left-col">
              <div className="about-content-section">
                <h1>{ wish + firstName }</h1>
                <h4>{ date }</h4>
                <h4>{ time }</h4>
                <br />
                <span className='colored-text'>How can I help you today?</span>
                {buttonText ? <Link to={buttonLink} className="button">{buttonText}</Link> : null}
              </div>
            </Col>
            <Col md={6} className="right-col">
              <img className= "about-image" alt="About" src={withPrefix(image)} />
            </Col>
          </Row>
      </Container>
    </div>
  )
}

TimestampComponent.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
}
