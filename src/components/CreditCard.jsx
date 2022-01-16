import React from 'react'

const CreditCard = ({props}) => {
  return (
      <div className="card">
        <div className="card-container">
          <div className="top-card">
            <p>Saldo</p>
            <p>VISA</p>
          </div>
          <div className="card-balance-container">
            <p>$ {props.cashBalance}.00</p>
          </div>
          <div className="cardNumber-container">
            <p>*{props.cardNumber}</p>
          </div>
          <div className="card-data">
            <p>{props.userName}</p>
            <div>
              <p className="card-data-title">Vencimiento</p>
              <p className="card-data-exp">{props.expirationDate}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreditCard;
