import React ,{useState}  from "react";
import './Styling/Room.css';
import Card from "../cards/Card";
import './Styling/Card.css';





function Room ( ){
  

    return(
        <>
        <div className="room-class">
          
          <img className="img1" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
          <h2 className="header">WELCOME TO</h2>
              <h2 className="header-1">MANTE'S</h2>
              <h2 className="header-2">HOTELS</h2>
              <h2 className="header-3">Book Your stay and enjoy Luxury<br></br>
              redefined at the most affordable rates </h2>




          <h2>ROOMS AND RATES</h2>
              <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, <br></br>
              comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented <br></br>
              by the rich tones of nature's palette as visible from our rooms' sea-view windows and terraces.</p>
            
             
        </div>
        <Card 
        title="Luxury Suite"
        imageUrl="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
        details="Free WiFi &#8226; Airport shuttle &#8226; Parking on site &#8226; Restaurant &#8226;Bar &#8226; Non-smoking rooms &#8226; Parking &#8226; Tea/Coffee Maker in All Rooms  &#8226;Bar "
        price="R500"
        />

        <Card
        title="West Life"
        imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/47546965.jpg?k=39a1c82572e2cfa8fa8df53456a64b9157e853c9195692b0cebedb0bb8f1f17b&o=&hp=1"
        details="Wifi &#8226; Balcony &#8226; Soundproof &#8226; Terrace &#8226; Outdoor swimming pool &#8226; Air conditioning &#8226; Garden &#8226; City view"
        price="R600"
      />

<Card
        title="Giglio Boutique"
        imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/195837313.jpg?k=688f1a0b60df9f8c1c53c9263f8a1ede98c7125cfe7e6e5e0fe56990abc3ba47&o=&hp=1"
        details="Wifi &#8226; Outdoor swimming pool &#8226;Airport shuttle &#8226; Room service &#8226; Fitness center &#8226;Bar &#8226;Wonderful Breakfast
        &#8226; Private garden"
        price="R800"
      />
        </>
        );
    }
    
    
    export default Room;