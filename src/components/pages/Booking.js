import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Styling/Booking.css';
import { collection, addDoc } from 'firebase/firestore'; // Import the required Firestore functions
import { db } from '../../config/firebase'; // Import the initialized Firestore instance
import { useHistory } from 'react-router-dom';


const Booking = () => {
  
  const history = useHistory();
  const location = useLocation();
  const { roomDetails } = location.state;
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [nightCount, setNightCount] = useState(0);




 
  /*const handleReservation = () => {
    alert(`You have reserved ${roomDetails.title}.`);
  };*/

  const handleReservation = async () => {
    try {
      // Add the reservation information to Firestore
      const docRef = await addDoc(collection(db, 'reservations'), {
        title: roomDetails.title,
        imageUrl: roomDetails.imageUrl,
        details: roomDetails.details,
        price: roomDetails.price,
        timestamp: new Date(),
      });

      console.log('Document written with ID: ', docRef.id);
      alert(`You have reserved ${roomDetails.title}.`); // Show success message
      history.push("/reserved");

    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Reservation failed! Please try again later.'); // Show error message
    }
  };

  const handleIncrement = () => {
    setChildrenCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setChildrenCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  
  const handleIncAdult = () => {
    setAdultCount((prevCount) => prevCount + 1);
  };

  const handleDecAdult = () => {
    setAdultCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  
  const handleIncNight = () => {
    setNightCount((prevCount) => prevCount + 1);
  };

  const handleDecNight = () => {
    setNightCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };


  return (
   


<div className='container-booking'>
          <div className="container d-flex align-items-center justify-content-center" style={{ width: '1000vh' }}>
      <div className="card shadow" style={{ maxWidth: '800px' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <div style={{ height: '100%' }}>
              <img src={roomDetails.imageUrl} className="card-img" alt={roomDetails.title} style={{ objectFit: 'cover', height: '100%' }} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{roomDetails.title}</h5>
              
              <p className="card-text">{roomDetails.details}</p>
              <br></br>
              
              <p className="card-price">{roomDetails.price}</p>
              <p className="text-price" style={{ float: 'right' }}>
                /night
              </p>

              <div className='children-counter'>
              <div className="children-label">
                    <p>Children:</p>
                  </div>
                  
                  <button className='counter-button' onClick={handleDecrement}>
                    -
                  </button>
                  <span className='counter-value'>{childrenCount}</span>
                  <button className='counter-button' onClick={handleIncrement}>
                    +
                  </button>
                </div>

                <div className='children-counter'>
              <div className="adult-label">
                    <p>Adults:</p>
                  </div>
                  
                  <button className='counter-button' onClick={handleDecAdult}>
                    -
                  </button>
                  <span className='counter-value'>{adultCount}</span>
                  <button className='counter-button' onClick={handleIncAdult}>
                    +
                  </button>
                </div>

                <div className='children-counter'>
              <div className="night-label">
                    <p>Nights:</p>
                  </div>
                  
                  <button className='counter-button' onClick={handleDecNight}>
                    -
                  </button>
                  <span className='counter-value'>{nightCount}</span>
                  <button className='counter-button' onClick={handleIncNight}>
                    +
                  </button>
                </div>
              <button type="button" className="btn btn-outline-warning btn-lg" onClick={handleReservation} style={{ float: 'right' }}>
              Reserve
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   



    </div>

  );
};

export default Booking;
