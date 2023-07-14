import './Styling/ResetPassword.css';

import { useState } from "react";

function ForgotPassword() {

   

    const [email,setPassword] = useState('')
    return(
        <div className='outer-container'>
        <div className="reset-container">
                <h4>Reset Password</h4>
            <input type="text" placeholder="Enter your email" 
            onChange={(event) => setPassword(event.target.value)}
            />
            <br></br>
            <br></br>
            <button className="btn4"> Reset Password</button>
        </div>
        </div>
    )
}
export default ForgotPassword;