import React, {useState} from 'react';
import { FaRegHeart,FaHeart } from 'react-icons/fa';




const Card = ({title, imageUrl, details}) => {

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ width: '1000vh' }} >
    <div className="card shadow" style={{ maxWidth: '700px' }}>
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
                  <FaHeart size={24} color="red" className="heart-icon" />
                ) : (
                  <FaRegHeart size={24} color="red" className="heart-icon" />
                )}
              </button>
              </div>
     


            <p className="card-text">{details}</p>
           

            <button type="button" class="btn btn-outline-warning btn-lg">Booking</button>
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
