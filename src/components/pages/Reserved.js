import React from 'react';
import reservedImage from '../images/check.svg'; // Replace 'reserved.jpg' with the actual file name of your image
import './Styling/Reserved.css';
import { useHistory } from 'react-router-dom';



function Reserved() {
    const history = useHistory();

    const goToHome = (() =>{

      
        history.push("/home");
        })

   

    return(
        <div className='reserve-container'>

                 <img src={reservedImage} className='image-reserve' alt="Reserved" />
        <h4>Reservation Successful</h4>
        <p>Your room has been reserved</p>

        <button type="button" className="btn btn-dark btn-lg btn-block" style={{ backgroundColor: '#a68d26', color: '#fff' }} onClick={ goToHome }>BACK HOME</button>
        </div>

        
    )
}
export default Reserved;