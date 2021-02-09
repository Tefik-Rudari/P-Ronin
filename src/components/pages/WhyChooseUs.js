import React from 'react'
import "./services.css"
import { FcAcceptDatabase } from "react-icons/fc";

const WhyChooseUs = () => {
    return (
        <div>
            <h1>Why choose us</h1>
            <br/>
            <div className="maindiv">
                <div className="topdiv">
                    <div className="top1">
                        <div className="ikona"><FcAcceptDatabase size={28}/></div>
                        <div className="kontentdiv">
                            <p className="kontenttitle">Awesome Design</p>
                            <p>ggfhjjkjksfjksdfjkdfsajkfajfsggffasfadfasggfgassg</p>
                        </div>
                    </div>
                    <div className="top2">
                    <div className="ikona"><i><FcAcceptDatabase /></i></div>
                        <div className="kontentdiv">
                            <p className="kontenttitle">Awesome Design</p>
                            <p>ggfhjjkjksfjksdfjkdfsajkfajfsggffasfadfasggfgassg</p>
                        </div>
                    </div>
                </div>
                <div className="bottomdiv">
                    <div>
                        <div className="ikona"><i></i></div>
                        <div className="kontentdiv"></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
