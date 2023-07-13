import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import { auth } from "../../config/firebase";
import { useState } from "react";

import './Styling/Register.css';
import { useHistory, Link } from "react-router-dom";

function Register () {
       
const history = useHistory() ;
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const registration = (() =>{
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
        alert("Registered Successfully");
        history.push("/");

    }).catch((error)=>{

        console.log(error.message)
    })

})


                
                 
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
                             
            <button className="btn3" onClick={registration}>
            Sign Up
            </button>
            <br></br>
                      </div>
              
                      </div>
                      </nav>
 )
}
export default Register;