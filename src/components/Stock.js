import React from "react";

const Stock = ({ stockToRender, handleClick }) => (
  <div>
    <div className="card" onClick={() => handleClick(stockToRender.id)}>
      <div className="card-body">
        <h5 className="card-title">{stockToRender.name}</h5>
        <p className="card-text">
          {`${stockToRender.ticker} : ${stockToRender.price}`}
        </p>
      </div>
    </div>
  </div>
);

export default Stock;
