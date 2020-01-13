import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderMyStocks = () => {
    if (this.props.myStocks.length > 0) {
      return this.props.myStocks.map(s => {
        return <Stock stock={s} key={s.id} addOrRemoveFromMyStocks={stock => this.props.addOrRemoveFromMyStocks(stock)}/>
      })
    }
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderMyStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
