import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import './SingleUsers.css'
import { useState} from 'react';

const SingleUsers = () => {
    const {id}= useParams();
    const [user, setUser]= useState([])
    console.log(id)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[]

    )
    
    console.log(user)
    return (
        <div>
                  
            <Row className="singleusercol">
                <Col md={6}>
                    <h1>Hi It's me {`${user.name}`}</h1>
                    <h3> Email : {`${user.email}`}</h3>
                    <h3> UserName: {`${user.username}`}</h3>
                    <h3> Website: {`${user.website}`}</h3>
                    <NavLink to ={'posts'}>Click here to see posts of mine</NavLink>

            
                </Col>
            </Row>
            
        </div>
    );
};

export default SingleUsers;