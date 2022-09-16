import React from 'react';
import "./Layout.css";
import log from "../images/baglogo.jpg";
import { NavLink, Outlet } from 'react-router-dom';



const Layout = () => {
    return (<>
        <div  className="layout">
            <div className="logoimg"><img src={log} alt="" /></div>
            <ul className="nav">
                <li><NavLink to ="/home"> Home</NavLink> </li>
                <li><NavLink to ="/about"> About Us</NavLink> </li>
                <li><NavLink to ="/product"> Product</NavLink> </li>
                <li><NavLink to ="/pricing"> Pricing</NavLink> </li>
                <li><NavLink to ="/contact"> Contact Us</NavLink> </li>
                
            </ul>
            
        </div>
        
        <Outlet/>
        </>
    );
};

export default Layout;