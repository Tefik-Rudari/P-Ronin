import React from 'react'
import './WhatWeDo.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FaTools } from "react-icons/fa"

const WhatWeDo = () => {
  return <>
    <Container>
      <Row className="w-heading">
        <Col md={12} className="awesome-features">
          <h1 className="w-headTitle">
            Awesome features
            </h1>
        </Col>
        <Col md={12}>
          <p className="w-paragraph">
            But I must explain to you how all this mistaken idea of denouncing and praising but I <br />
            must explain to you how all this mistaken idea of  denouncing and praising
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          left
          <Row className="w-leftContent">
            <Col md={12}>
              <div className="w-iconbcg">
                <FaTools size={35} color="#2DADE8" />
              </div>
            </Col>
            <Col md={12}>
              Title
            </Col>
            <Col md={12}>
              paragraf again
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          mid
        </Col>
        <Col md={4}>
          right
        </Col>
      </Row>
    </Container>
  </>
}

export default WhatWeDo
