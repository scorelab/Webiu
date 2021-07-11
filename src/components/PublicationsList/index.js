import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import PublicationListItem from './PublicationListItem'
import AchievementListItem from "./AchievementListItem"
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const PublicationsList = ({title, items=[], limit, suffle, publications, achievements}) => {
  const suffledItems = suffle ? items.sort(() => Math.random() - 0.5) : items

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
        {publications ? <Row>
          {suffledItems.map((item, i) => !limit || i < limit ? (
            <PublicationListItem
              key={i}
              {...item}
            />
          ) : null)}
        </Row> : null}
        {achievements ? <Row>
          {suffledItems.map((item, i) => !limit || i<limit ? (
             <AchievementListItem 
               key={i}
               {...item}
             />
          ) : null)}
        </Row> : null}
        <Row>
          <Col className="view-all-btn-container">
            {!limit || <Link to={'/publications'} className="btn">Many More <FontAwesomeIcon icon={faArrowRight}/></Link>}
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
  suffle: PropTypes.bool,
  publications: PropTypes.bool,
  achievements: PropTypes.bool
}