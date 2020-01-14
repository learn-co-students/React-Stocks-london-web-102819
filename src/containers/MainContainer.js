import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [], 
    sortByStocks: ""
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(stocks => this.setState({ stocks }))
  }

  addToPortfolio = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  removeStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(s => s.id !== stock.id)
    })
  }

  handleRadio = event => {
    this.setState({sortByStocks: event.target.value})
  };

  filterStocks = (type) => {
    if (type !== "All") {
      this.setState({
        stocks: this.state.stocks.filter(stock => stock.type === type)
      })
    } else {
      this.setState({
        stocks: this.state.stocks
      })
    }
  }



  render() {
    const { stocks, portfolio } = this.state;
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

            <StockContainer stocks={stocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
