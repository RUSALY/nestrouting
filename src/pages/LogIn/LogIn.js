import { EmailAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext, } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import InitializeAuthentication from '../../components/Firebase/InitializationAuthentication';

import "./LogIn.css"
import { UserContext } from '../../App';
const app = InitializeAuthentication();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const EmailProvider = new EmailAuthProvider();


const LogIn = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navgate =useNavigate();
    const [user,setUser] = useContext(UserContext)
    
  


    const getData = (data) =>{
        console.log(data)
    signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
          // Signed in 
      const user = userCredential.user;
      setUser(user)
      console.log(user)
      navgate ( `${user.email}`)
      // ...
    })};



    // const getData = (data) =>{
    //     console.log(data)
    //     const user = {}
            
    //         user.email = data.Email
    //         user.password = data.Password
    //         setUser(user)
    //         console.log(user)
    //         navgate(`${user.email}`)

    //     };

 

    function handleLogin() {
        signInWithPopup(auth, GoogleProvider).then((result) => {
            const user = {}
            user.displayName = result.user.displayName
            user.email = result.user.email
            user.photoURL = result.user.photoURL
            setUser(user)
            console.log(user)
            navgate(`${user.displayName}`)
            
          })
        }

    // const firstNameSchema ={
    //     required : true,
    //     maxLength :9
    // }

    
    return (
        <div className="regform">
            <div className="regbox">
                <h1 className="regh1">Log In</h1>

                
                
                <form onSubmit={handleSubmit(getData)} className="reginfo">
                    {/* <label>First Name</label>
                    <input type="text" {...register("FirstName" , firstNameSchema)} name="FirstName"/>
                    {errors.FirstName && <span className='text-danger'>Invalid</span>}
                
                    <label>Second Name</label>
                    <input type="text" {...register("SecondName")} name="SecondName"/> */}
                
                    <label>Email</label>
                    <input type="email" {...register("email")}  name="email"/>

                    <label>Password</label>
                    <input type="text" {...register("password")}  name="password"/>

                    <input type="submit" />

                    
                </form> 

                <div className="loginop">
                <li><NavLink to ="/log"  id="login" onClick={handleLogin}> <button className="bt">LogIn with Google</button></NavLink> </li>
                <li><NavLink to ="/log"> <button className="bt">LogIn with facebook</button></NavLink> </li>
                <li><NavLink to ="/log"> <button className="bt">LogIn with Github</button></NavLink> </li>
           
                </div>
            </div>
            
        </div>
  
    );
};

export default LogIn;