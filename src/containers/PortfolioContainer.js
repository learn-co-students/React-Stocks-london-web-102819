import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    const { stockToRenderInPortfolio, handleSaleStock } = this.props;
    return (
      <div>
        <h2>My Portfolio</h2>
        {stockToRenderInPortfolio.map(stock => {
          return <Stock stockToRender={stock} handleClick={handleSaleStock} />;
        })}
      </div>
    );
  }
}

export default PortfolioContainer;
