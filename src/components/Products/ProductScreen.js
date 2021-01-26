import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ProductScreen = () => {
  return (
    <div>
      <Col>
        <Row md={6}>
          <h1>Get the <br /> inspiration <br /> of interior design</h1>
        </Row>
        <Row md={6}>
          Here goes an image
        </Row>
      </Col>
    </div>
  )
}

export default ProductScreen
