import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby"

export const ComingSoon = ({ countdownText, header, buttonText, buttonLink, deployDate, image, message }) => {

    const [calculated, setCalculated] = useState(null);
    const defaultDate = "1 Jan, 2022 00:00:00"
    var countDownDate;

    if (deployDate) {
        countDownDate = new Date(deployDate).getTime();
    } else {
        countDownDate = new Date(defaultDate).getTime();
    }

    var countdownfunction = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCalculated(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (distance < 0) {
            clearInterval(countdownfunction);
            setCalculated("0d 0h 0m 0s");
        }
    });

    return (
        <div className="countdown-div">
            {header ? <div className="header-component">
                <h2 className="title">
                    <FontAwesomeIcon className="icon" icon={faHourglassHalf} /> {header}
                </h2>
            </div> : null}
            <Container>
                <Row>
                    <Col md={6} className="left-col">
                    <div className="countdown-content-section">
                        <h2><span className="heading-secondary">{ countdownText }</span></h2>
                        <h1 className="heading-primary">{ calculated }</h1>
                        <br />
                        <span className='colored-text'>{message}</span><br />
                        {buttonText ? 
                          <div className="button-div">
                            <Link to={buttonLink} className="countdown-button">{buttonText}</Link> 
                          </div>
                        : null}
                    </div>
                    </Col>
                    <Col md={6} className="right-col">
                        <img src={image} alt="logo" className="countdown-img" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

ComingSoon.propTypes = {
    countdownText: PropTypes.string,
    bottomText: PropTypes.string,
    deployDate: PropTypes.string,
    buttonLink: PropTypes.string,
    message: PropTypes.string,
    image: PropTypes.string,
    header: PropTypes.string
}