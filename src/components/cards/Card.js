import React, {useState} from 'react';
import { FaRegHeart,FaHeart } from 'react-icons/fa';
import { useHistory, Link } from "react-router-dom";




function Card ({title, imageUrl, details, price}) {


  const history = useHistory() ;


  const goToReservation = (() =>{

          alert("Log in Successfully");
      history.push("/booking");
      })

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };

  const roundBackgroundStyles = {
    backgroundColor: '#d5e5f0',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    float: 'right'
    

  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ width: '1000vh' }} >
    <div className="card shadow" style={{ maxWidth: '800px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
        <div style={{ height: '100%' }}>
          <img src={imageUrl} className="card-img" alt={title} style={{ objectFit: 'cover', height: '100%' }} />
          </div>

        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            

            
            <div className='love-but'>


            <button type="button" className="love-button" onClick={toggleLike} style={{  backgroundColor: 'transparent', border: 'none' }}>
                {isLiked ? (
                  <FaHeart size={30} color="red" className="heart-icon" />
                ) : (
                  <FaRegHeart size={30} color="grey" className="heart-icon" />
                )}
              </button>

              </div>
              <div className='round' style={roundBackgroundStyles}>


              </div>
     


            <p className="card-text">{details}</p>
           


            <br></br>
            <button type="button" class="btn btn-outline-warning btn-lg" onClick={ goToReservation }>Booking</button>
            
            
            <p className='card-price'>{price}</p>
            <p className='text-price' style={{ float: 'right' }}>/night</p>
            
            <p className="card-text">
              <small className="text-muted">Last clicked 3 mins ago</small>
            </p>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
