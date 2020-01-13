import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {
    const { stocks, onAddingToMyStocks, myStocks} = this.props 
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          stocks.map(stock => {
            return <Stock 
              key={stock.id} 
              stock={stock} 
              onAddingToMyStocks={onAddingToMyStocks}
              myStocks={myStocks}
              removeFromMyStocks={()=>{}}
            />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
