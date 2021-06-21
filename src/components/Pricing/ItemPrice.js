import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
import { Link } from "gatsby"

const ItemPrice = ({ data }) => {
  return (
    <Col lg={4}>
      <div className="pricing-list-item-component" >
        <div>
          {data.plan ? <p className="item-title">{data.plan}</p> : null}
          {data.plan ? <hr /> : null}
          {data.price ? <h2 className="item-price">
            ${data.price}
          </h2> : null}
          <div className="item-description">
            {data.description ? <p>{data.description}</p> : null}
          </div>
          {data.items ? <ul>
            {data.items.map(item => (
              <li key={item} className="item-features">
                {item}
              </li>
            ))}
          </ul> : null}
          <div className="btn-center">
            {data.buttonLink && data.buttonText ? 
              <Link to={data.buttonLink} className="btn">{data.buttonText}</Link> 
            : null}
          </div>
        </div>
      </div>
    </Col>
  )
}

ItemPrice.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
      buttonText: PropTypes.string,
      buttonLink: PropTypes.string
    }),
  ),
}

export default ItemPrice