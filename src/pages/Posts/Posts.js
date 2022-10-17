
import './Posts.css'
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { useState} from 'react';

const Posts = () => {
    const {id}= useParams();
    const [post, setPosts]= useState([]);
    const [comments, setComments]= useState([])
   
    
        useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((res)=>res.json())
            .then((data)=>setPosts(data))
        },[])
        useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((res)=>res.json())
            .then((data)=>setComments(data))
        },[])


        console.log(comments)
    return (
         
            <div>
                
                    <div className="pts">
                       {post.map((post,index)=>(
                        <div className="pt">
                            <p key={index}>{post.title}</p>
                            {/* <NavLink to ={`${post.id}`}>
                               <p>Click here to see comments</p>    
                                </NavLink> */}
                                {
                                    comments.filter((comments)=>(comments.postId===post.id)).map((comments)=>(
                                      <div className="ms-5">Comments :
                                         <li>{comments.name}</li>
                                      </div>
                                        

                                    )

                                    )
                                }
                        </div>
                       )

                       )}
                    </div>
                    

            </div>

    
    );
};

export default Posts;