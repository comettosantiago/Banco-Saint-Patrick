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
            {/* <p>$ {props.cashBalance}.00</p> */}
            <p>$ 3500</p>
          </div>
          <div className="cardNumber-container">
            {/* <p>*{props.cardNumber}</p> */}
            <p>**** **** **** 1213</p>
          </div>
          <div className="card-data">
            {/* <p>{props.userName}</p> */}
            <p>Noelis Hernández Da Graca</p>
            <div>
              <p className="card-data-title">Vencimiento</p>
              {/* <p>{props.expirationDate}</p> */}
              <p className="card-data-exp">12/24</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreditCard;
