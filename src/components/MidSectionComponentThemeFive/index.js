import React from 'react'
import PropTypes from "prop-types"
import "./style.sass"
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const MidSectionThemeFive = ({mainText,mainHead,mainPara,button,img,secondHead,secondSubHead,countItems}) => {
    return (
        <div className='midSectionWrapper'>
            <Container className='midMainSection'>
                <Row>
                    <Col className='mainLeftContainer'>

                        <p className='mainText'>{mainText}</p>
                        <h1 className='mainHead'>{mainHead}</h1>
                        <p className='mainPara'>{mainPara}</p>
                        <button className='mainButton'>{button} &nbsp; <FontAwesomeIcon icon={faArrowRight} /> </button>

                    </Col>
                    <Col className='mainRightContainer'>
                        <img src={img} height="400px" width="425px" alt="" />
                    </Col>
                </Row>
            </Container>

            <Container className='midSecondSec'>


                <Row>
                    <Col className='midSecHead'>
                        <p className='conferenceP'>{secondHead}</p>
                        <h3 className='conferenceHead'>{secondSubHead}</h3>
                    </Col>

                    <Col className='midSecCountdown'>
                        <Container className='countDownContainer'>
                            <div className='countDownDiv'>
                                <span className='countDown'>{countItems[0].time}</span> 
                                <span className='duration'>{countItems[0].duration}</span> 
                            </div>
                            <div className='countDownDiv'>
                                <span className='countDown'>{countItems[1].time}</span> 
                                <span className='duration'>{countItems[1].duration}</span>
                            </div>
                            <div className='countDownDiv '>
                                <span className='countDown'>{countItems[2].time}</span> 
                                <span className='duration'>{countItems[2].duration}</span>
                            </div>
                            <div className='countDownDiv'>
                                <span className='countDown'>{countItems[3].time}</span> 
                                <span className='duration'>{countItems[3].duration}</span>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

MidSectionThemeFive.propTypes={
    mainText:PropTypes.string,
    mainHead:PropTypes.string,
    mainPara:PropTypes.string,
    button:PropTypes.string,
    img:PropTypes.string,
    secondHead:PropTypes.string,
    secondSubHead:PropTypes.string,
}