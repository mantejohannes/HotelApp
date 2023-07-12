import './Styling/Register.css';

 
import { useState } from "react";

function Register () {
              
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
              
                
                 
return(
              
    <nav className="reg-container">
        <div className="reg-box">
              
              
            <div>
            <h2>Sign Up</h2>
            <div className="user-box">
            <input type="text"  placeholder="Enter Your Email"  
            onChange={(event) => setEmail(event.target.value) }
                />
            <label>Email</label>
                </div>
                              
            <br></br>
            <div className="user-box">
            <input type="password"  placeholder="Enter Your Password"
            onChange={(event) => setPassword(event.target.value) } />
                          
            <label>Password</label>
            </div>
                             
            <button className="btn3">
            Sign Up
            </button>
            <br></br>
                      </div>
              
                      </div>
                      </nav>
 )
}
export default Register;