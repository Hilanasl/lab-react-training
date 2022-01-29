import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className="clickablePic">
      {!state ? (
        <img
          className="profilePic"
          src={img}
          alt="Profile"
          onClick={handleClick}
        />
      ) : (
        <img
          className="profilePic"
          src={imgClicked}
          alt="With glasses"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default ClickablePicture;
