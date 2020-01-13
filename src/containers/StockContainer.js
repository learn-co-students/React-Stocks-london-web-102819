import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    if (this.props.stocks.length > 0) {
      return this.props.stocks.map(s => {
        return <Stock stock={s} key={s.id} addOrRemoveFromMyStocks={stock => this.props.addOrRemoveFromMyStocks(stock)}/>
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
