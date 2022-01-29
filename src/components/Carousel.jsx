import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  let currentImage = images[currentPosition];

  const nextBtn = () => {
    currentPosition !== images.length - 1
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition(0);
    console.log(currentPosition);
  };

  const prevBtn = () => {
    currentPosition !== images.length - 1
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition(images.length - 1);
  };
  return (
    <div>
      <button onClick={prevBtn}>Previous</button>
      <img src={currentImage} alt="" />
      <button onClick={nextBtn}>Next</button>
    </div>
  );
};

export default Carousel;
