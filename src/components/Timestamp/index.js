import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, withPrefix } from "gatsby"
import {Container, Row, Col} from 'react-bootstrap'
import "./style.sass"

export const Timestamp = ({ image, firstName, buttonText, buttonLink, message }) => {

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
    <div style={{ backgroundImage: `url(${withPrefix('/images/dots.png')})` }} className="timestamp-component" >
      <Container>
          <Row>
            <Col md={6} className="left-timestamp-col">
              <div className="timestamp-content-section">
                <h2><span className="heading-primary">{ wish }</span> <span className="heading-secondary">{ firstName }</span></h2>
                <h4 className="heading-secondary">{ date }</h4>
                <h4 className="heading-secondary">{ time }</h4>
                <br />
                <span className='colored-text'>{message}</span>
                {buttonText ? <Link to={buttonLink} className="timestamp-button">{buttonText}</Link> : null}
              </div>
            </Col>
            <Col md={6} className="right-col">
              <img className="about-image" alt="About" src={withPrefix(image)} />
            </Col>
          </Row>
      </Container>
    </div>
  )
}

Timestamp.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  message: PropTypes.string
}