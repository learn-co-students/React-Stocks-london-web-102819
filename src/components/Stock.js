import React from "react";

const Stock = props => {
  const { stockToRender, onClick } = props;
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => onClick(stockToRender)}>
          <h5 className="card-title">{stockToRender.name}</h5>
          <p className="card-text">
            {stockToRender.ticker}: {stockToRender.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
