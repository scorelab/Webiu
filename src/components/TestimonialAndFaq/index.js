import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"

export const TestimonialAndFaq = ({
  mainTextLeft,
  subTextLeft,
  mainTextRight,
  subTextRight,
  description,
  faqData,
  subImage,
  subDataHeading,
  subDataPara,
}) => {
  return (
    <div className="TestimonailFaqWrapper">
      <Container>
        <Row>
          <Col md={6} className="TestimonailFaqLeftCol">
            <hr className="TestimonailFaqDivider" />
            <p className="subText">{subTextLeft}</p>
            <p className="mainHeading">{mainTextLeft}</p>
            <p className="TestimonailFaqDescription">{description}</p>
            <div class="image-left">
              <img src={subImage} />
              <div>
                <p className="SubSectionHeading">{subDataHeading}</p>
                <p className="SubSectionText">{subDataPara}</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="TestimonailFaqRightCol">
            <hr className="TestimonailFaqDivider" />
            <p className="subText">{subTextRight}</p>
            <p className="mainHeading">{mainTextRight}</p>
            {faqData &&
              faqData.map((faqData, index) => {
                return (
                  <div key={index} className="accordionFAQ">
                    <label className="accordionFAQ__item">
                      <input type="checkbox" name="accordionFAQ" />
                      <div className="accordionFAQ__title">
                        {faqData.question}
                      </div>
                      <div className="accordionFAQ__content">
                        {faqData.answer}
                      </div>
                    </label>
                  </div>
                )
              })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

TestimonialAndFaq.propTypes = {
  mainText: PropTypes.string,
  description: PropTypes.string,
  subText: PropTypes.string,
  subImage: PropTypes.string,
  faqData: PropTypes.string,
  subDataHeading: PropTypes.string,
  subDataPara: PropTypes.string,
}
