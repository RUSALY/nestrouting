
import "./Users.css"
import React, { useEffect } from 'react';
import { Row , Col} from 'react-bootstrap';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Users = () => {
    const [users, setUsers]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    },[]

    )

    return (
        <div>
            {users.map( (users)=>(

                <NavLink to ={`${users.id}`}>
                    <Row className = "g-3">
                        <Col md={6}>
                            <Card>
                                <h3>{users.name}</h3>
                            </Card>


                        </Col>
                    </Row>
                </NavLink>
            )

            )}
          

          
        </div>
    );
};

export default Users;



{/* <Row>
            <Col md={3}>
                <Card>
                    <h3>{users.name}</h3>
                </Card>


            </Col>
    </Row>
            
             */}