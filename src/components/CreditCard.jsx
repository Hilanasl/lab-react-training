import React from 'react';

const CreditCard = (props) => {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  const cardNum = props.number.slice(-4);
  const logo = props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg';

  return (
    <div className="card-container">
      <div className="creditCard" style={divStyle}>
        <img className="logo" src={logo} alt=""></img>
        <p>•••• •••• •••• {cardNum}</p>
        <p>
          Expires: {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
