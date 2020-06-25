import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import PublicationListItem from './PublicationListItem'
import {Link} from "gatsby"

const PublicationsList = ({title, items=[], limit}) => {
  return (
    <div className="publications-list-component">
      <Container>
        <Row>
          <Col>
            <h1 className="title">{title}</h1>
          </Col>
        </Row>
        <Row>
          {items.map(item => (
            <PublicationListItem
              {...item}
            />
          ))}
        </Row>
        <Row>
          <Col>
            <Link to={'/publications'} className="btn">View All</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

PublicationsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  limit: PropTypes.number,
}

export default PublicationsList