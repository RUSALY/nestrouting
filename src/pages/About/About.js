import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import "./About.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import plan from "../../images/plan.jpg";
import { FaBeer } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { ImPriceTag } from 'react-icons/im';
import { BsSpeedometer } from 'react-icons/bs';
import { MdDeliveryDining } from 'react-icons/md';
import { MdWifiProtectedSetup } from 'react-icons/md';


const About = () => {
    return (
    <>
     <Container className="cont">
        <div className="contdiv">
            <div className="aboutus">
                 
                       <h1>This is about our company</h1>
                       
                       
                       <span>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                       industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                       electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                       release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                       software like Aldus PageMaker including versions of Lorem Ipsum.
                       </span>
                       
            
               </div> 
              <div className="story">
                    <h1 className="h2">Our story</h1>
                    <Row>
                        <Col md={6} >
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                            scrambled it to make a type specimen book.
                            
                            </p>
                        </Col>
                        <Col md={6} >
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                            scrambled it to make a type specimen book.
                            </p>
                        </Col>
                    </Row>  
               </div> 

               <div  className="story">
                        <h1 className="h2">Our Plan</h1>
                        <Row>
                                        <Col md={6} className="g-0">
                                        <div className="item" >
                                            <img src={plan} alt="" />
                                        </div> 
                                        
                                        </Col>
                                        <Col md={6}  className="g-0">
                                        <div className="itemcoldiv2">
                                    <ul>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <BsFillCartFill /></h5>
                                            </div>
                                            <div className="lidiv2">
                                                <h5>Blaggest Varity</h5>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <ImPriceTag /></h5>
                                            </div>
                                            <div className="lidiv2">
                                            <h5>Best Prices</h5>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <BsSpeedometer /></h5>
                                            </div>
                                            <div className="lidiv2">
                                            <h5>Easy and speed</h5>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <MdDeliveryDining /></h5>
                                            </div>
                                            <div className="lidiv2">
                                            <h5>Fast Delivery</h5>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <MdWifiProtectedSetup /></h5>
                                            </div>
                                            <div className="lidiv2">
                                            <h5>100%protected</h5>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                        
                                            
                                        
                                        </Col>
                        </Row> 
               


               </div>









        </div>

           
     </Container>
    
    
    </>
           
            
        
    );
};

export default About;





{/* <Col md={5} >
                           
                            <h5>Best Prices</h5>
                             
                              
                              
                           
                           
                           
                           */
                        
                        
                          
                        
                        
                        
                        }

                         {/* <div className="item" >
                                    <img src={plan} alt="" />
                                    </div> */}


                         {/* <Row>
                            <Col md={6} className="g-0">
                                <div className="item" ><img src={plan} alt="" /></div>
                            </Col>
                            <Col md={6}  className="g-0">
                                <div className="itemcoldiv2">
                                    <ul>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <FaBeer /></h5>
                                            </div>
                                            <div className="lidiv2">
                                                <h5>Blaggest Varity</h5>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <FaBeer /></h5>
                                            </div>
                                            <div className="lidiv2">
                                            <h5>Best Prices</h5>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <FaBeer /></h5>
                                            </div>
                                            <div className="lidiv2">
                                            <h5>Easy and speed</h5>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <FaBeer /></h5>
                                            </div>
                                            <div className="lidiv2">
                                            <h5>Fast Delivery</h5>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="lidiv1">
                                                <h5> <FaBeer /></h5>
                                            </div>
                                            <div className="lidiv2">
                                            <h5>100%protected</h5>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </Col>
                        </Row> */}