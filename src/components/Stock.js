import React from "react";

const Stock = ({ stock, onClick }) => (
  <div>
    <div className="card">
      <div className="card-body" onClick={() => onClick(stock)}>
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.ticker + ":" + stock.price}</p>
      </div>
    </div>
  </div>
);

export default Stock;
