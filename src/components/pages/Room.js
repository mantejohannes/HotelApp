import React from "react";
import './Styling/Room.css';
import Card from "../cards/Card";
import './Styling/Card.css';




const Room = ( ) =>{
    return(
        <>
        <div className="room-class">
          
          <img className="img1" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
          <h2>ROOMS AND RATES</h2>
              <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, <br></br>
              comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented <br></br>
              by the rich tones of nature's palette as visible from our rooms' sea-view windows and terraces.</p>
            
             
        </div>
        <Card />
        </>
        );
    }
    
    
    export default Room;