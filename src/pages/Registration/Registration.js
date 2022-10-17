import React, { useContext, useState } from 'react';
import "./Registration.css"

import { useForm } from "react-hook-form";
import { getAuth, } from "firebase/auth";
import InitializeAuthentication from '../../components/Firebase/InitializationAuthentication';
import {  createUserWithEmailAndPassword} from 'firebase/auth';

import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const app = InitializeAuthentication();
const auth = getAuth(app);

const Registration = () => {
    
    const { register, handleSubmit,  formState: { errors }, } = useForm();
    const [user,setUser] = useContext(UserContext)
    const navgate =useNavigate();
    
 
    
    // const onSubmit = (data) => {
    //     console.log(data)
    // }
        
    const onSubmit = (data) =>{
        
        createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
          // Signed in 
      const user = userCredential.user;
      setUser(user)
      console.log(user)
    //   navgate(`${user.email}`)
      // ...    
    });
    }   



        
        

    
    

    
    //     const firstNameSchema ={
    //     required : true,
    //     maxLength :9
    // }

    return (
        <>
           {user.email?
            <>
                        <Navigate to=":email" replace={true} />
                        </>:
                    <>
                    <div className="regform">
                        <div className="regbox">
                            <h1 className="regh1">Registration Form</h1>
            
                            
                            
                            <form onSubmit={handleSubmit(onSubmit)} className="reginfo">
                                {/* <label>First Name</label>
                                <input type="text" {...register("FirstName" , firstNameSchema)} name="FirstName"/>
                                {errors.FirstName && <span className='text-danger'>Invalid</span>}
                            
                                <label>Second Name</label>
                                <input type="text" {...register("SecondName")} name="SecondName"/>
                             */}
                                <label>Email</label>
                                <input type="email" {...register("email")}  name="email"/>
            
                                <label>Password</label>
                                <input type="text" {...register("password")}  name="password"/>
            
                                <input type="submit" />
                            </form>
            
                            <div>
                            {/* <li><NavLink to ="/user"> <button>Registration</button></NavLink> </li> */}
                       
                            </div>
                        </div>
                        
                    </div>
                    </>
                    }
        </>

        ) ;
      
     
}
      



export default Registration;