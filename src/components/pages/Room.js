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
        <Card 
        title="Luxury Suite"
        imageUrl="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
        details="Wifi &#8226; Air conditioning &#8226; Kitchen &#8226; Heating &#8226; Smokers &#8226; Parking &#8226; Balcony &#8226; Animal friendly"

        />

<Card
        title="Luxury Villa"
        imageUrl="https://images.unsplash.com/photo-1612143398944-0fc4e9671f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        details="Wifi &#8226; Air conditioning &#8226; Pool &#8226; Spa &#8226; Private garden"
      />
        </>
        );
    }
    
    
    export default Room;