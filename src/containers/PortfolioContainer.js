import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    const { stockInProfolio, stocks, onSaleStock } = this.props;

    return (
      <div>
        <h2>My Portfolio</h2>
        {stockInProfolio.map(stock => {
          return (
            <Stock stockToRender={stock} onClick={() => onSaleStock(stock)} />
          );
        })}
        {/* {stockInProfolio.map(stock => {
          return (
            <div className="card">
              <div className="card-body" key={stock.id} onClick={null}>
                <h5 className="card-title">{stock.name}</h5>
                <p className="card-text">
                  {stock.ticker}: {stock.price}
                </p>
              </div>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default PortfolioContainer;
