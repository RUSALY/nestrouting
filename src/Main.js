import React from 'react';
import './App.css';
import { Route,  Routes,} from 'react-router-dom';
import Home from './pages/Home/Home';
import { Container } from 'react-bootstrap';
import Layout from './shared/Layout';
import Contactus from './pages/Contact Us/Contactus';
import About from './pages/About/About';
import Product from './pages/Products/Product';
import Pricing from './pages/Pricing/Pricing';
import Registration from './pages/Registration/Registration';
import Users from './pages/Users/Users';
import SingleUsers from './pages/SingleUsers/SingleUsers';
import Posts from './pages/Posts/Posts';
import Comment from './pages/Comment/Comment';
import LogIn from './pages/LogIn/LogIn';

const Main = () => {
    
    return (
        <div>
            <Container>
                <Routes>

                    <Route path="/" element={<Layout /> }>
                        <Route path="home" element={<Home/>}/>
                        <Route path="" element={<Home/>}/>

                        <Route path="reg" element={<Registration/>}/>
                        <Route path="log" element={<LogIn />}/> 

                        <Route path="log/:displayName" element={<Home/>}/> 
                        <Route path="log/:email" element={<Home/>}/> 
                        <Route path="reg/:email" element={<Home/>}/>
                    
                    
                    
                
                        <Route path="contact" element={<Contactus/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="pricing" element={<Pricing/>}/>
                        <Route path="product" element={<Product/>}/>

                        <Route path="users" element={<Users/>}/>
                        <Route path="users/:id/posts" element={<Posts/>}/>
                        <Route path="users/:id/posts/:postId" element={<Comment/>}/>

                        <Route path="users/:id" element={<SingleUsers/>}/>
                    </Route>

             
                
               
                
                </Routes>
   
            </Container>
            
        </div>
    );
};

export default Main;
