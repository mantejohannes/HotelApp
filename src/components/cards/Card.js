import React, {useState} from 'react';
import { FaRegHeart,FaHeart } from 'react-icons/fa';




const Card = () => {

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
          <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" className="card-img" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
          </div>

        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">The Peoples's Brownstone</h5>
            
            <div className='love-but'>
            <button type="button" className="love-button" onClick={toggleLike} style={{  backgroundColor: 'transparent', border: 'none' }}>
                {isLiked ? (
                  <FaHeart size={24} color="red" className="heart-icon" />
                ) : (
                  <FaRegHeart size={24} color="red" className="heart-icon" />
                )}
              </button>
              </div>
     


            <p className="card-text">
            Wifi &#8226; Air conditioning &#8226; Kitchen &#8226; Heating 
            &#8226; Smokers <br></br>&#8226; Parking &#8226; Balcony &#8226; Animal friendly
            </p>
           

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
