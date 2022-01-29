import React from 'react';
import Rating from '../components/Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-container">
      <div className="cardDriver">
        <div>
          <img className="profile-photo" src={img} alt="Profile"></img>
        </div>
        <div className="driver-infos">
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <p>
            {car.model} {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
