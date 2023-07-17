import React from "react";
import './Styling/Room.css';
import Card from "../cards/Card";
import './Styling/Card.css';




function Booking ( ){
    
    return(
        <>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>

        <Card 
        title="Luxury Suite"
        imageUrl="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
        details="Free WiFi &#8226; Airport shuttle &#8226; Parking on site &#8226; Restaurant &#8226;Bar &#8226; Non-smoking rooms &#8226; Parking &#8226; Tea/Coffee Maker in All Rooms  &#8226;Bar "
        />

        <Card
        title="West Life"
        imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/47546965.jpg?k=39a1c82572e2cfa8fa8df53456a64b9157e853c9195692b0cebedb0bb8f1f17b&o=&hp=1"
        details="Wifi &#8226; Balcony &#8226; Soundproof &#8226; Terrace &#8226; Outdoor swimming pool &#8226; Air conditioning &#8226; Garden &#8226; City view"
      />

<Card
        title="Giglio Boutique"
        imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/195837313.jpg?k=688f1a0b60df9f8c1c53c9263f8a1ede98c7125cfe7e6e5e0fe56990abc3ba47&o=&hp=1"
        details="Wifi &#8226; Outdoor swimming pool &#8226;Airport shuttle &#8226; Room service &#8226; Fitness center &#8226;Bar &#8226;Wonderful Breakfast
        &#8226; Private garden"
      />
        </>
        );
    }
    
    
    export default Booking;