import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../config/firebase";

import './Styling/Login.css';

import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Login () {

    const history = useHistory() ;
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const goToHomePage = (() =>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            alert("Log in Successfully");
        history.push("/home");

    }).catch((error)=>{

    })

    })
  
    return(

       
        <nav className="login-container">
        <div className="login-box">
            <h2>Login</h2>
            <div className="user-box">

          
            

           
         
         <input type="text" placeholder="Enter your email" 
            onChange={(event) => setEmail(event.target.value)}
            /> 
             <label>Email</label>  
            </div>
          

            <div className="user-box">
            <input type="password" placeholder="Enter your password"   
            onChange={(event) => setPassword(event.target.value)}
            />
            <label>Password</label>

            </div>

            <button className="btn2" onClick={ goToHomePage }>Login</button> <br></br> <br></br>
            
          
            {/*Navigate using LINK function */}
              
                <br></br>
            <Link to="/forgotpassword">Forgot Password</Link>  
            <br></br>
            <Link to="/register">Don't have an account : Sign Up</Link>  
        </div>
        </nav>
)
    

}

export default Login;