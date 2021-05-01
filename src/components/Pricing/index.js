import React from 'react'
import PriceItem from './OnePriceItem'
import PropTypes from 'prop-types'
import "./style.sass"
import { Container, Row, Col } from 'react-bootstrap'

export const Pricing = ({ title, description, plans }) => {

  return (
    <div className="pricing-list-component">
      <Container>
        {!title || (
          <Row>
            <Col>
              <h1 className="title">{title}</h1>
            </Col>
          </Row>
        )}
        {description ? <p>{description}</p> : null}
        {plans ? <Row>
          {plans.map((item, i) => (
            <PriceItem
              data={item}
            />
          ))}
        </Row> : null}
      </Container>
    </div>
  )
}
Pricing.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  plans: PropTypes.array
}
