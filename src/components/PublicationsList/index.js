import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import PublicationListItem from './PublicationListItem'
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const PublicationsList = ({title, items=[], limit}) => {
  return (
    <div className="publications-list-component">
      <Container>
        {!title || (
          <Row>
            <Col>
              <h1 className="title">{title}</h1>
            </Col>
          </Row>
        )}
        <Row>
          {items.map((item, i) => (
            <PublicationListItem
              key={i}
              {...item}
            />
          ))}
        </Row>
        <Row>
          <Col className="view-all-btn-container">
            {!limit || <Link to={'/publications'} className="btn">View All <FontAwesomeIcon icon={faArrowRight}/></Link>}
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