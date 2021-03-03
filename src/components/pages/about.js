import React from 'react'
import "./about.css"
import { Container } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'


export const About = () => {
const name = "PRonins";
const description = " is a software company founded by a group of engineers and friends. Our main goal is to increase the level of digitalization in our country. The company's name PRonins, is a composite of the words: Programming Ronins.  ";
const seconddescription = " To grow as a company and individually, we believe that hardwork is not the only tool. But by reaching out to people more, giving back and helping others to have a online reference flag. With that said, we would like to share our cardinal virtues: practical wisdom, resilience, fairness and courage.";
const thirddescription = " Having our ideas and principles firmly in our grip, we will strive to do our part at the maximum level of dedication and precision. ";
  

return (
        <section id='About'>
            <Container className='pt-5 pb-5'>


                <h1>Who are we?</h1>

                    <div className='Kontineri1'>
                        <Row className=" mt-5">
                            <Col md={12} className="colon 1">


                                <div className=' box1'>
                                    <div className="top1">
                                        <div className="kontentdiv">
                                            <p className="kontenttext1"> 
                                            {name}
                                            </p>
                                            <p className="kontenttext"> 
                                             {description} 
                                             <br />
                                             <br />
                                             {seconddescription}
                                             <br />
                                             <br />
                                             {thirddescription}
                                            

                                       
                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            </Row>
                            </div>
</Container>
</section>
    )
}

export default About
                      