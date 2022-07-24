import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { DetailCard } from "../DetailCard"
import { Container, Row, Col } from "react-bootstrap"

export const DetailCardGrid = ({ gridHeading, data }) => {
  return (
    <div>
      <div className="cardsWrapper">
        <h1 class="detail-heading">{gridHeading}</h1>
      </div>
      <Container>
        <Row className="cardsPosition">
          <Col className="card-col">
            {data &&
              data.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={data.index % 2 === 1 ? "with-class" : "no-class"}
                  >
                    <DetailCard
                      title={data.titleOne}
                      description={data.descriptionOne}
                      className="customCardClass"
                    />
                  </div>
                )
              })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
DetailCardGrid.propTypes = {
  gridHeading: PropTypes.string,
  data: PropTypes.array,
}
