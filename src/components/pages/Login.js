import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../config/firebase";

import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function LoginForm () {

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

    return (
      <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1554647286-f365d7defc2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-" style={{ color: '#ff6219' }}></i>
                          <span className="h1 fw-bold mb-0">Mante's Hotel</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg" 
                          onChange={(event) => setEmail(event.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" 
                           onChange={(event) => setPassword(event.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={ goToHomePage }>Login</button>
                        </div>
                        <Link to="/forgotpassword" className="small text-muted">Forgot password?</Link>
                        
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/register"
                          style={{ color: '#393f81' }}>Register here</Link>  </p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default LoginForm;
  