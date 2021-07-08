import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import {navigate, withPrefix} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export const ImageGrid = ({header, images, size, categories, categoryData}) => {

  const renderImages = () => {
    return (
      <Row>
        {images.map(i => (
          <Col md={size} key={i}>
            <img alt="Logo" src={withPrefix(i.imageUrl)} />
            {i.imageText ? <p>{i.imageText}</p> : null}
          </Col>
        ))}
      </Row>
    )
  }

  return (
    <div className="image-grid-component">
      {header ? <div className="header-component">
          <h2 className="title">
            <FontAwesomeIcon className="icon" icon={faImage} /> {header}
          </h2>
      </div> : null}
      {images && images.length > 0 ? renderImages() : !categories ?  
                                   <p>No screen shots found!</p> : null}
      <Container>
        <Row>
          {categories ?
            categoryData.map((category, id) => (
              <Col md={size} className="category-col" key={id}>
                <div className="category-div" 
                     style={{backgroundColor: category.color}}  
                     onClick={() => navigate(category.route)}>
                  <h3 className="category-text">{category.text}</h3>
                </div>
              </Col>
            ))
          : null}
        </Row>  
      </Container>  
    </div>
  )
}


ImageGrid.propTypes = {
  images: PropTypes.array,
  header: PropTypes.string,
  size: PropTypes.number,
  categories: PropTypes.bool,
  categoryData: PropTypes.array
}
