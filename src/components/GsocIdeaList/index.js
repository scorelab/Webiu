import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'
import { Collapse } from 'antd';

const { Panel } = Collapse;

export const GsocIdeaList = ({ heading, description, listItems}) => {
  return (
    <div className="gsoc-idea-list-component">
      <Container>
        <Row>
          <Col> 
            {!heading || <h1>{heading}</h1>}
            {!description || <h2>{description}</h2>}

            <Collapse>
              {!listItems || listItems.map((item, i) => (
                <Panel header={item.title} key={`${i}`}>
                  <h4>Description</h4>
                  <p dangerouslySetInnerHTML={{ __html: item.description}}></p>
                  <h4>Expected Results</h4>
                  <p dangerouslySetInnerHTML={{ __html: item.expectedresults}}></p>
                  <h4>Required Knowledge</h4>
                  <p>{item.requiredknowledge}</p>
                  <h4>Possible Mentors</h4>
                  <p>{item.possiblementors}</p>
                  <h4>Github Url</h4>
                  <a href={item.githuburl}>{item.githuburl}</a>
                </Panel>
              ))}
            </Collapse>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

GsocIdeaList.propTypes = {
  heading: PropTypes.string, 
  description: PropTypes.string,
  listItems: PropTypes.array
}