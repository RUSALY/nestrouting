import React, { useContext } from 'react';
import "./Layout.css";
import log from "../images/baglogo.jpg";
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';



import { getAuth,  signInWithPopup , signOut, GoogleAuthProvider } from "firebase/auth";
import InitializeAuthentication from '../components/Firebase/InitializationAuthentication';
import { useState } from 'react';
import { UserContext } from '../App';

    

    const GoogleProvider = new GoogleAuthProvider();
   const app = InitializeAuthentication();
    const auth = getAuth(app);
  
    




const Layout = ( ) => {

    const [user, setUser]= useContext(UserContext)
    // const {displayName}= useParams();
    // const [myuser, setmyUser] = useState({displayName})
    // console.log(myuser)
  
    // function handleLogin() {
    //     signInWithPopup(auth, GoogleProvider).then((result) => {
    //         const user = {}
    //         user.displayName = result.user.displayName
    //         user.email = result.user.email
    //         user.photoURL = result.user.photoURL
    //         setUser(user)
    //       })
    //     }
      


    const handleLogout = () => {
        signOut(auth).then(() => setUser({}))
      }

    // const handleAuth =()=>{
    //     console.log(auth.currentUser)}
 

  



    return (<>
           
        <div  className="layout">
            <div className="logoimg"><img src={log} alt="" /></div>
            <div className="nav1">

                    <ul className="nav">
                    <li><NavLink to ="/"> Home</NavLink> </li>
                    <li><NavLink to ="/about"> About Us</NavLink> </li>
                    <li><NavLink to ="/product"> Product</NavLink> </li>
                    <li><NavLink to ="/pricing"> Pricing</NavLink> </li>
                    <li><NavLink to ="/contact"> Contact Us</NavLink> </li>
                    <li><NavLink to ="/users"> Users</NavLink> </li>
                    
                    
                        <li>{user.email? <>
                    
                            
                            <li>
                                <span className="username">{(user.email)}</span>
                                
                                <button id="logout"  onClick={handleLogout}>Log Out</button>
                                
                            </li>
                        
                            </>:
                            <>
                            
                                
                                
                                <li className="login">
                                <span><NavLink to ="/reg"> <button className="reg">Registration</button></NavLink> </span>
                                <span><NavLink to ="/log"> <button className="reg">Log In</button></NavLink></span>
                                {/* <button id="login" onClick={handleLogin}>Log In</button> */}
                                </li>
                        
                            </>
                    
                        }</li>

                    </ul>


            </div>
           
           
            
          
        
            
            
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




//     <div className="nav1">
                
                
//     {user.email? <>
//         <ul className="nav">
//             <li><NavLink to ="/"> Home</NavLink> </li>
//             <li><NavLink to ="/about"> About Us</NavLink> </li>
//             <li><NavLink to ="/product"> Product</NavLink> </li>
//             <li><NavLink to ="/pricing"> Pricing</NavLink> </li>
//             <li><NavLink to ="/contact"> Contact Us</NavLink> </li>
//             <li><NavLink to ="/users"> Users</NavLink> </li>
//             <li>
//                 <span className="username">{(user.email)}</span>
                
//                 <button id="logout"  onClick={handleLogout}>Log Out</button>
                
//             </li>
//         </ul>
//     </>:
//     <>
//             <ul className="nav">
//                 <li><NavLink to ="/home"> Home</NavLink> </li>
//                 <li><NavLink to ="/about"> About Us</NavLink> </li>
//                 <li><NavLink to ="/product"> Product</NavLink> </li>
//                 <li><NavLink to ="/pricing"> Pricing</NavLink> </li>
//                 <li><NavLink to ="/contact"> Contact Us</NavLink> </li>
//                 <li><NavLink to ="/users"> Users</NavLink> </li>
                
//                 <li className="login">
//                 <span><NavLink to ="/reg"> <button className="reg">Registration</button></NavLink> </span>
//                 <span><NavLink to ="/log"> <button className="reg">Log In</button></NavLink></span>
//                 {/* <button id="login" onClick={handleLogin}>Log In</button> */}
//                 </li>
//             </ul>

//     </>
    
//     }

   
  





// </div>






//   <div className="nav1">

//                 <ul className="nav">
//                     <li><NavLink to ="/"> Home</NavLink> </li>
//                     <li><NavLink to ="/about"> About Us</NavLink> </li>
//                     <li><NavLink to ="/product"> Product</NavLink> </li>
//                     <li><NavLink to ="/pricing"> Pricing</NavLink> </li>
//                     <li><NavLink to ="/contact"> Contact Us</NavLink> </li>
//                     <li><NavLink to ="/users"> Users</NavLink> </li>
                    
                    
//                         <li>{user.email? <>
                    
                            
//                             <li>
//                                 <span className="username">{(user.email)}</span>
                                
//                                 <button id="logout"  onClick={handleLogout}>Log Out</button>
                                
//                             </li>
                        
//                             </>:
//                             <>
                            
                                
                                
//                                 <li className="login">
//                                 <span><NavLink to ="/reg"> <button className="reg">Registration</button></NavLink> </span>
//                                 <span><NavLink to ="/log"> <button className="reg">Log In</button></NavLink></span>
//                                 {/* <button id="login" onClick={handleLogin}>Log In</button> */}
//                                 </li>
                        
//                             </>
                    
//                         }</li>

//                 </ul>


//     </div>