import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import StarRating from '../pages/Rating';

function Card({ title, imageUrl, details, price }) {
  const history = useHistory();
  const [isLiked, setIsLiked] = useState(false);

  const [userRating, setUserRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  



  const toggleLike = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };

  const goToReservation = () => {
    const roomDetails = {
      title,
      imageUrl,
      details,
      price,
    };
    history.push({
      pathname: '/booking',
      state: { roomDetails },
    });
  };

  const roundBackgroundStyles = {
    backgroundColor: '#d5e5f0',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    float: 'right',
  };

 

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ width: '1000vh' }}>
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
              <div className="love-but">
                <button type="button" className="love-button" onClick={toggleLike} style={{ backgroundColor: 'transparent', border: 'none' }}>
                  {isLiked ? <FaHeart size={30} color="red" className="heart-icon" /> : <FaRegHeart size={30} color="grey" className="heart-icon" />}
                </button>
              </div>
              <div className="round" style={roundBackgroundStyles}></div>
              <p className="card-text">{details}</p>
              <br></br>
              <button type="button" className="btn btn-outline-warning btn-lg" onClick={goToReservation}>
                Booking
              </button>
              <p className="card-price">{price}</p>
              <p className="text-price" style={{ float: 'right' }}>
                /night
              </p>
              <StarRating maxStars={5} initialRating={userRating} onRatingChange={handleRatingChange} />
              {userRating > 0 && <p> {userRating.toFixed(1)}</p>}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
