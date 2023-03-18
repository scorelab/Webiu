import React from 'react';
import "./style.sass";
import { Container, Row, Col, Card} from "react-bootstrap";
import PropTypes from "prop-types";

const BlogGrid = ({headingText, data}) => {
  return (
    <div className="blog-grid">
      <Container className="container">
        <Row>
          <Col md={12} className="Heading">
            <h1 className="headingText">{headingText}</h1>
          </Col>
        </Row>
        {data.length>0?(
        <Row className="row">
          {data.map((item,index)=>{
            return(
          <Col md={4} key={index} className="cards-col">
            <Card className="blog-cards">
            <Card.Img src={item.cardImage} style={{borderTopLeftRadius:"35px",borderTopRightRadius:"35px"}}/>
              <Card.Body className="card-body">
                <Card.Title className="card-heading-text">{item.cardHeadingText}</Card.Title>
                <Card.Text className="card-description-text">
                  {item.cardDescriptionText}
                </Card.Text>
                <div className="card-circle">
                  <div className="card-arrow">&#10230;</div>
                </div>
              </Card.Body>
            </Card>
          </Col>)})}
        </Row>) : 
        <p>No blogs available</p>}
      </Container>
    </div>
  );
};

export default BlogGrid;

BlogGrid.propTypes={
  headingText: PropTypes.string,
  data: PropTypes.array
}
