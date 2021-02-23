import React from 'react'
import "./services.css"
import { GiPencilRuler } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { ImBug } from "react-icons/im";
import { FaTools } from "react-icons/fa"

const WhyChooseUs = () => {
    return (
        <div>
            <section id='WhyChooseUs'>

            <h1>Why choose us</h1>
            <br />
            <div className="maindiv">
                <div className="topdiv">
                    <div className="top1">
                        <div className="ikona"><GiPencilRuler size={35} color="#EA6B66" /></div>
                        <div className="kontentdiv">
                            <p className="kontenttitle">Awesome Design</p>
                            <p className="kontenttext">But I must explain to you how all this mistaken idea of<br/>
                            denouncing and praising but I must explain to you<br/>
                            how all this mistaken idea of denouncing and<br/>
                            praising But I must explain to you how all mistaken
                            </p>
                        </div>
                    </div>
                    <div className="top2">
                        <div className="ikona"><i><FiMail size={35} color="#65E5C4" /></i></div>
                        <div className="kontentdiv">
                            <p className="kontenttitle">Notification Update</p>
                            <p className="kontenttext">But I must explain to you how all this mistaken idea of<br/>
                            denouncing and praising but I must explain to you<br/>
                            how all this mistaken idea of denouncing and<br/>
                            praising But I must explain to you how all mistaken
                            </p>
                        </div>
                    </div>
                </div>
                <div className="topdiv">
                    <div className="top1">
                        <div className="ikona"><ImBug size={35} color="#8475CF" /></div>
                        <div className="kontentdiv">
                            <p className="kontenttitle">Bug Free code</p>
                            <p className="kontenttext">But I must explain to you how all this mistaken idea of<br/>
                            denouncing and praising but I must explain to you<br/>
                            how all this mistaken idea of denouncing and<br/>
                            praising But I must explain to you how all mistaken
                            </p>
                        </div>
                    </div>
                    <div className="top2">
                        <div className="ikona"><i><FaTools size={35} color="#2DADE8" /></i></div>
                        <div className="kontentdiv">
                            <p className="kontenttitle">Maintenance</p>
                            <p className="kontenttext">But I must explain to you how all this mistaken idea of<br/>
                            denouncing and praising but I must explain to you<br/>
                            how all this mistaken idea of denouncing and<br/>
                            praising But I must explain to you how all mistaken
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default WhyChooseUs
