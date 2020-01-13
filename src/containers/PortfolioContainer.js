import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.stocks.map(stock =>
          this.props.checkPortfolioForStock(stock.id) ? (
            <Stock {...stock} handleStockClick={this.props.handleStockClick} />
          ) : (
            undefined
          )
        )}
      </div>
    );
  }
}

export default PortfolioContainer;
