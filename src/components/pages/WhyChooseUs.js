import React from 'react'
import "./services.css"
import { Container } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'
import { GiPencilRuler } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { ImBug } from "react-icons/im";
import { FaTools } from "react-icons/fa"

const WhyChooseUs = () => {
    return (
        <section id='WhyChooseUs'>
            <Container>


                <h1>Why choose us</h1>

                <div className="maindiv">
                    <div className='Kontineri1'>
                        <Row className="mb-5 mt-5">
                            <Col md={6} className="colon 1">


                                <div className=' box1'>
                                    <div className="top1">
                                        <div className="ikona"><GiPencilRuler size={35} color="#EA6B66" /></div>
                                        <div className="kontentdiv">
                                            <p className="kontenttitle">Awesome Design</p>
                                            <p className="kontenttext">Just like a book needs it's cover, so do businesses need their branding.
                                            Our restless team will efficiently offer
                                            great logos, branding and design.
                                            And other design related services like: brochures, web design and more.
                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                      
                            <Col md={6}>

                                <div className=' box1'>
                                    <div className="top1">
                                        <div className="ikona"><i><FiMail size={35} color="#65E5C4" /></i></div>
                                        <div className="kontentdiv">
                                            <p className="kontenttitle">Functionality</p>
                                            <p className="kontenttext"> Functionality is the greatest indicator of a good product.
                                            A product with good functionality, dyed with good design
                                            and providing good service to our partners, is what defines our company.

                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className=' box1'>
                                    <div className="top1">
                                        <div className="top1">
                                            <div className="ikona"><ImBug size={35} color="#8475CF" /></div>
                                            <div className="kontentdiv">
                                                <p className="kontenttitle">Marketing & Promoting</p>
                                                <p className="kontenttext"> 
                                               Getting people to know a companies services is never been more easily reached, and in order to attract as much clients as possible, a business needs to have 
                                               good marketing strategies. 
                                          
                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                 
                            <Col md={6}>
                                <div className=' box1'>
                                    <div className="top1">
                                        <div className="ikona"><i><FaTools size={35} color="#2DADE8" /></i></div>
                                        <div className="kontentdiv">
                                            <p className="kontenttitle">Maintenance</p>
                                            <p className="kontenttext">But I must explain to you how all this mistaken idea of
                                            denouncing and praising but I must explain to you
                                            how all this mistaken idea of denouncing and
                                            praising But I must explain to you how all mistaken
                            </p>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WhyChooseUs
