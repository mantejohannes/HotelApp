import React from "react";
import { Link } from "react-router-dom";

const Navbar = ( ) =>{
    return(
   
        
        <nav className="navbar navbar-expand-sm bg-dark bg-transparent fixed-top">
       
          
            <ul className="navbar-nav">

            <li className="nav-item">
                <u>
                <Link className="nav-link" aria-current="page" to="/">Facilities</Link> </u>
     </li>

     <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/room">Rooms</Link>
     </li>
     
            </ul>
           
      
      </nav>
      
     
    );
  }

    

    export default Navbar;