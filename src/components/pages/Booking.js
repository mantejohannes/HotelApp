import React from 'react';
import { useLocation } from 'react-router-dom';
import './Styling/Booking.css';
import { collection, addDoc } from 'firebase/firestore'; // Import the required Firestore functions
import { db } from '../../config/firebase'; // Import the initialized Firestore instance
import { useHistory } from 'react-router-dom';





const Booking = () => {
  
  const history = useHistory();
  const location = useLocation();
  const { roomDetails } = location.state;

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
      alert(`You have reserved ${roomDetails.title}.`);  // Show success message
      history.push("/reserved");

    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Reservation failed! Please try again later.'); // Show error message
    }
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
