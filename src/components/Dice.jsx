import React, { useState } from 'react';

const Dice = () => {
  const [random, setRandom] = useState(3);
  const src = `assets/images/dice${random}.png`;

  const getRandom = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleClick = () => {
    setRandom(`-empty`);

    setTimeout(() => {
      setRandom(getRandom());
    }, 1000);
  };
  return (
    <>
      <div className="diceContainer">
        <img className="dice" src={src} alt="Dice" onClick={handleClick} />
      </div>
    </>
  );
};

export default Dice;
