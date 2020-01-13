import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const {stocks, portfolioStocks, addOrRemoveStock} = this.props
    const portfolio = stocks.filter(stock => portfolioStocks.includes(stock.id))
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           portfolio.map(stock => (
             <Stock addOrRemoveStock={addOrRemoveStock} {...stock}/>
           ))
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
