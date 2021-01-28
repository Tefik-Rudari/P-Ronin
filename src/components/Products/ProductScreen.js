import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const ProductScreen = () => {
  return <>
    <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
    <Row>
      <Col md={6} className='mr-5'>
        <h1>Get the <br /> inspiration <br /> of interior design</h1>
      </Col>
      <Col md={6}>
        Here goes an image
        </Col>
    </Row>
  </>
}

export default ProductScreen
