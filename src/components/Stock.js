import React from 'react'

const Stock = ({stock,onAddingToMyStocks, myStocks, removeFromMyStocks}) => {
  const handleChange = (e) => {
    e.preventDefault();
    myStocks.includes(stock)
    ? removeFromMyStocks(stock.id) 
    : onAddingToMyStocks(stock.id)
  }
  return(
    <div>
      <div className="card" onClick={handleChange}>
        <div className="card-body">
          <h5 className="card-title">{
              stock.name 
            }</h5>
          <p className="card-text">{
              `${stock.ticker}: ${stock.price}`
            }</p>
        </div>
      </div>
    </div>
  )
};

export default Stock
