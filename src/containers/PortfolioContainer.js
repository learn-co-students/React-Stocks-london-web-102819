import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  render() {
    const { myStocks, removeFromMyStocks } = this.props
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            myStocks.map(stock => {
              return <Stock 
                stock={stock} 
                myStocks={myStocks}
                removeFromMyStocks={removeFromMyStocks}
                onAddingToMyStocks={()=>{}}
              />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
