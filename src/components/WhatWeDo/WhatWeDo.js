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

    <Container id="whatwedocontainer">
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
              Engineering
              </h3>
            </Col>
            <Col md={12}>
              <p className="w-paragraphL">
              To have an idea is not enough, we must craft it. 
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
                IT Consulting
              </h3>
            </Col>
            <Col md={12}>
              <p className="w-paragraphL">
                Any idea if well developed, can reach a great margin of success.
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
                Designing 
              </h3>
            </Col>
            <Col md={12}>
              <p className="w-paragraphL">
               Functionality is not enough, a good product must look good.
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
                Marketing
              </h3>
            </Col>
            <Col md={12}>
              <p className="w-paragraphL">
                A product is as good as it is used or valued by people.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
}

export default WhatWeDo
