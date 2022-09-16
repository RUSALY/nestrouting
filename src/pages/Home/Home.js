import React from 'react';
import { Container } from 'react-bootstrap';
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from "../../images/bag1.jpg"
import img2 from "../../images/bag2.jpg"
import img3 from "../../images/bag3.jpg"
import img4 from "../../images/bag4.jpg"

const Home = () => {
    return (
        <Container>
 
           <div className="home">

            <span>Welcome to Home</span>

            <div className="cardswip">
                
            <Swiper 
            pagination={true} modules={[Pagination]} 
            className="mySwiper"
            spaceBetween={80}>


        <SwiperSlide>
            <div> <img src={img1} alt="" /></div>
           
        </SwiperSlide>
        <SwiperSlide>
        <div> <img src={img2} alt="" /></div>
        </SwiperSlide>
        <SwiperSlide>
        <div> <img src={img3} alt="" /></div>
        </SwiperSlide>
        <SwiperSlide>
        <div> <img src={img4} alt="" /></div>
        </SwiperSlide>
        
      </Swiper>
            </div>
            
            </div>
          

           </Container>

    );
};

export default Home;