import React from 'react'
import PropTypes from "prop-types"
import "./styles.sass"
import { Container } from 'react-bootstrap'

export const BlogGridThemeFive = ({ heading, cardItems }) => {
    return (
        <div className='blogGridWrapper'>
            <Container className='mainContainer'>
                <div className='BlogsHeadDiv'>
                    <h1 className='heading'> {heading} </h1>
                </div>



                <div className='gridsDiv'>

                    <div className='grid'>
                        <img className='gridImg' src={cardItems[0].img} alt="img" />
                        <div className='gridContentDiv'>
                            <h3 className='gridHead'>{cardItems[0].cardHead}</h3>
                            <p className='gridPara'>{cardItems[0].cardPara}</p>

                        </div>

                        <div className='buttonDiv'>

                            <div className="arrow-div">
                                <svg viewBox="0 0 24 24" width="54" height="54">
                                    <path fill="currentColor" d="M10.59 16.59L9.17 15.17L12 12.34L4.84 12.34C4.29 12.34 3.84 11.89 3.84 11.34C3.84 10.79 4.29 10.34 4.84 10.34L12 10.34L9.17 7.5L10.59 6.09L16.17 11.67L10.59 16.59Z" />
                                </svg>

                            </div>
                        </div>

                    </div>
                    <div className='grid'>
                        <img className='gridImg' src={cardItems[1].img} alt="img2" />
                        <div className='gridContentDiv'>
                            <h3 className='gridHead'>{cardItems[1].cardHead}</h3>
                            <p className='gridPara'>{cardItems[1].cardPara}</p>
                        </div>

                        <div className='buttonDiv'>

                            <div className="arrow-div">
                                <svg viewBox="0 0 24 24" width="54" height="54">
                                    <path fill="currentColor" d="M10.59 16.59L9.17 15.17L12 12.34L4.84 12.34C4.29 12.34 3.84 11.89 3.84 11.34C3.84 10.79 4.29 10.34 4.84 10.34L12 10.34L9.17 7.5L10.59 6.09L16.17 11.67L10.59 16.59Z" />
                                </svg>

                            </div>
                        </div>
                    </div>

                    <div className='grid grid-center'>
                        <img className='gridImg' src={cardItems[2].img} alt="img3" />
                        <div className='gridContentDiv'>
                            <h3 className='gridHead'>{cardItems[2].cardHead}</h3>
                            <p className='gridPara'>{cardItems[2].cardPara}</p>
                        </div>

                        <div className='buttonDiv'>

                            <div className="arrow-div">
                                <svg viewBox="0 0 24 24" width="54" height="54">
                                    <path fill="currentColor" d="M10.59 16.59L9.17 15.17L12 12.34L4.84 12.34C4.29 12.34 3.84 11.89 3.84 11.34C3.84 10.79 4.29 10.34 4.84 10.34L12 10.34L9.17 7.5L10.59 6.09L16.17 11.67L10.59 16.59Z" />
                                </svg>

                            </div>
                        </div>

                    </div>


                </div>

            </Container >
        </div >
    )
}

BlogGridThemeFive.propTypes = {
    heading: PropTypes.string,
    cardItems:PropTypes.array,
}