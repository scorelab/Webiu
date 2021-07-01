import React from 'react'
import ItemPrice from './ItemPrice'
import PropTypes from 'prop-types'
import "./style.sass"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

export const Pricing = ({ header, title, description, plans }) => {

  return (
    <div className="pricing-list-component">
        {header ? <div className="header-component">
            <h1><FontAwesomeIcon className="icon" icon={faDollarSign} /> {header}</h1>
        </div> : null}
        <Container>
            {!title || (
                <Row>
                    <Col className="title-div">
                    <h1 className="title">{title}</h1>
                    </Col>
                </Row>
            )}
            <div className="description-div">
              {description ? <p>{description}</p> : null}
            </div>
            {plans ? <Row>
            {plans.map((item, i) => (
                <ItemPrice
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
  plans: PropTypes.array,
  header: PropTypes.string
}