import React from 'react'
import './WhatWeDo.css';
import { Container } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'
import { FiMapPin } from "react-icons/fi"
import { GoSync } from "react-icons/go"
import { MdSecurity } from "react-icons/md"
import { FiDownload } from "react-icons/fi"
import Phone from '../../assets/phone-img.png'

const WhatWeDo = () => {
  return <>
    <Container>
      <Row className="w-heading">
        <Col md={12} className="awesome-features">
          <h1 className="w-headTitle">
            What we do
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
        <Col md={3}>
          <Row className="w-leftContent mb-5 mt-5">
            <Col md={12}>
              <div className="w-iconbcg">
                <FiMapPin size={36} color="#2DADE8" />
              </div>
            </Col>
            <Col md={12}>
              <h3 className="w-headTitleL">
                Everywhere access
              </h3>
            </Col>
            <Col md={12}>
              <p className="w-paragraphL">
                But I must explain to you how all this mistaken idea of denouncing
              </p>
            </Col>
          </Row>

          {/* SECOND ROW LEFTT */}

          <Row className="w-leftContent">
            <Col md={12}>
              <div className="w-iconbcgB">
                <GoSync size={36} color="#8475CF" />
              </div>
            </Col>
            <Col md={12}>
              <h3 className="w-headTitleL">
                All device synchronized
              </h3>
            </Col>
            <Col md={12}>
              <p className="w-paragraphL">
                But I must explain to you how all this mistaken idea of denouncing
              </p>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Row>
            <Col md={11}>
              <Image src={Phone} alt={Phone} className="w-image" />
            </Col>
          </Row>
        </Col>

        <Col md={3}>
          <Row className="w-leftContent mb-5 mt-5">
            <Col md={12}>
              <div className="w-iconbcg w-iconbcgTR">
                <MdSecurity size={36} color="#77DEC3" />
              </div>
            </Col>
            <Col md={12}>
              <h3 className="w-headTitleL">
                High security
              </h3>
            </Col>
            <Col md={12}>
              <p className="w-paragraphL">
                But I must explain to you how all this mistaken idea of denouncing
              </p>
            </Col>
          </Row>

          {/* SECOND ROW LEFTT */}

          <Row className="w-leftContent">
            <Col md={12}>
              <div className="w-iconbcgB w-iconbcgBR">
                <FiDownload size={36} color="#77CFF7" />
              </div>
            </Col>
            <Col md={12}>
              <h3 className="w-headTitleL">
                Free download
              </h3>
            </Col>
            <Col md={12}>
              <p className="w-paragraphL">
                But I must explain to you how all this mistaken idea of denouncing
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
}

export default WhatWeDo
