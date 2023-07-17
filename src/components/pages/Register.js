import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import { auth } from "../../config/firebase";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function RegisterForm () {

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
    

    return (
      <section className="vh-100" style={{ backgroundColor: '#a0aac2' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-" style={{ color: '#ff6219' }}></i>
                          <span className="h1 fw-bold mb-0">Mante's Hotel</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Register your account</h5>
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
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={registration}>Register</button>
                        </div>
                        
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
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
  
  export default RegisterForm;
  