

import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { useState} from 'react';
import './Comment.css';

const Comment = () => {
    const {postId}= useParams();
    const [comment, setComment]= useState([])
    console.log(postId)
   
    
        useEffect(()=>{
           
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((res)=>res.json())
            .then((data)=>setComment(data))
        },[])

        console.log(comment)
    return (     
        <div>
          
          <div className="com">
                    {comment.map((comment,index)=>(
                    <div className="com">
                        <p key={index}>{comment.body}</p>
                        
                    </div>
                    )

                    )}
            </div>
          
        </div>
    );
};

export default Comment;