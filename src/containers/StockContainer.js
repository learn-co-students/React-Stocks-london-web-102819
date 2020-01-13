import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    const { stocksToRender, handleBuyStock } = this.props;

    return (
      <div>
        <h2>Stocks</h2>
        {stocksToRender.map(stock => {
          return <Stock stockToRender={stock} onClick={handleBuyStock} />;
        })}
      </div>
    );
  }
}

export default StockContainer;
