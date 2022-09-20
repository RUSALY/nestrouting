import React from 'react';
import "./Layout.css";
import log from "../images/baglogo.jpg";
import { NavLink, Outlet } from 'react-router-dom';



import { getAuth,  signInWithPopup , signOut, GoogleAuthProvider } from "firebase/auth";
import InitializeAuthentication from '../components/Firebase/InitializationAuthentication';
import { useState } from 'react';

    

    const GoogleProvider = new GoogleAuthProvider();
   const app = InitializeAuthentication();
    const auth = getAuth(app);
  
    




const Layout = () => {
    const [user, setUser] = useState({})

  
    function handleLogin() {
        signInWithPopup(auth, GoogleProvider).then((result) => {
            const user = {}
            user.displayName = result.user.displayName
            user.email = result.user.email
            user.photoURL = result.user.photoURL
            setUser(user)
          })
        }
      


    const handleLogout = () => {
        signOut(auth).then(() => setUser({}))
      }

    // const handleAuth =()=>{
    //     console.log(auth.currentUser)}
 

        console.log(user)



    return (<>
           
        <div  className="layout">
            <div className="logoimg"><img src={log} alt="" /></div>
            <ul className="nav">
                <li><NavLink to ="/home"> Home</NavLink> </li>
                <li><NavLink to ="/about"> About Us</NavLink> </li>
                <li><NavLink to ="/product"> Product</NavLink> </li>
                <li><NavLink to ="/pricing"> Pricing</NavLink> </li>
                <li><NavLink to ="/contact"> Contact Us</NavLink> </li>
                <li>
                    {user.email? <>
                        <span className="username">{(user.displayName)}</span>

                        <button id="logout"  onClick={handleLogout}>Log Out</button>

                    </>:<><button id="login" onClick={handleLogin}>Log In</button>
                    </>}

                   
                    {/* <button id="logout"  onClick={handleAuth}>get auth</button> */}
                </li>
                
                
            </ul>
            
        </div>
        
        <Outlet/>
        </>
    );
};

export default Layout;












    //     const [user, setUser] = useState (`email`)
    //     const login = document.getElementById('login')
    //     const logout = document.getElementById('logout')
        
    //     if (user = email) {
    //     logout.style.display = 'inline'
    //     login.style.display = 'none'

    //      }else {
    //     logout.style.display = 'none'
    //     login.style.display = 'inline'

    //   }