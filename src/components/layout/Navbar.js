import React from "react";
import { Link } from "react-router-dom";

const Navbar = ( ) =>{
    return(
   
        
        <nav className="navbar navbar-expand-sm bg-dark bg-transparent fixed-top">
       
          
            <ul className="navbar-nav">


            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Login</Link>
           </li>

            <li className="nav-item">
                <u>
                <Link className="nav-link" aria-current="page" to="/home">Facilities</Link> </u>
           </li>

          <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/room">Rooms</Link>
          </li>

     
    
     
     {/*
     <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
    </li>*/}
    
            </ul>
           
      
      </nav>
      
     
    );
  }

    

    export default Navbar;