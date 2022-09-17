import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Prpgb.css";
import { GoDeviceMobile } from 'react-icons/go';


const Prpgb = () => {
    return (
        <div  className="prpgbcon">
            <Row>
                <Col md={4} className="g-3">
                    <div className="box">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="iconflip">
                                    <h5><GoDeviceMobile/></h5>
                                </ div>
                                <div>
                                    <h1>Tele-order</h1>
                                </div>
                            </div>
                            <div className="flip-card-back">
                            <p>Bring Tele-Hospice video into your existing applications. 
                                Simplify your daily routines using video consultation to bring 
                                into your reliable, straightforward telehealth experience – 
                                whether you’re any palliative patient.</p>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col md={4} className="g-3">
                    <div className="box">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <div className="iconflip">
                                    <h5><GoDeviceMobile/></h5>
                                </ div>
                                <div>
                                    <h1>Tele-order</h1>
                                </div>
                            </div>
                            <div className="flip-card-back">
                            <p>Bring Tele-Hospice video into your existing applications. 
                                Simplify your daily routines using video consultation to bring 
                                into your reliable, straightforward telehealth experience – 
                                whether you’re any palliative patient.</p>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col md={4} className="g-3">
                    <div className="box">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <div className="iconflip">
                                    <h5><GoDeviceMobile/></h5>
                                </ div>
                                <div>
                                    <h1>Tele-order</h1>
                                </div>
                            </div>
                            <div className="flip-card-back">
                            <p>Bring Tele-Hospice video into your existing applications. 
                                Simplify your daily routines using video consultation to bring 
                                into your reliable, straightforward telehealth experience – 
                                whether you’re any palliative patient.</p>
                            </div>
                        </div>

                    </div>
                </Col>
             
            </Row>
           
            
        </div>
    );
};

export default Prpgb;