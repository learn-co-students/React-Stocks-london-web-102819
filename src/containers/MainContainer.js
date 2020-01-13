import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    portfolio: [],
    filter: "Tech", 
    sortBy: undefined
  }

  addOrRemoveStockFromPortfolio = stock => {
    const updatedPort = this.state.portfolio.map(stockId => {stockId !== stock})
    !this.state.portfolio.includes(stock)?
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    :
    this.setState({
      portfolio: updatedPort
    })
  }

  handleFilterChange = filter => {
    this.setState({filter: filter.target.value})
  }

  sortStocks = option => {
      this.setState({sortBy: option.target.value})
  }


  render() {
    const {stocks} = this.props
    const SortedStocks = this.state.sortBy === "Alphabetically"? stocks.sort((a, b) =>  a.name.localeCompare(b.name)) : stocks.sort((a, b) =>  a.price - b.price)
    const filteredStocks = SortedStocks.filter(stock => stock.type === this.state.filter)  
    return (
      <div>
        <SearchBar sort={this.state.sortBy} sortStocks={this.sortStocks} changeFilter={this.handleFilterChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addOrRemoveStock={this.addOrRemoveStockFromPortfolio} stocks={filteredStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer addOrRemoveStock={this.addOrRemoveStockFromPortfolio} stocks={stocks} portfolioStocks={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
