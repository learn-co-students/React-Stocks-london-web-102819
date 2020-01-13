import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    myStocks: [],
    filter: 'Tech',
    sortType: 'Alphabetically'
  }

  componentDidMount () {this.fetchStocks()}

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(this.setStocks)
  }

  setStocks = stocks => {
    this.setState({stocks: stocks})
  }

  addOrRemoveFromMyStocks = stock => {
    if (!!this.state.myStocks.find(s => s.id === stock.id)) {this.removeFromMyStocks(stock)}
    else {this.addToMyStocks(stock)}
  }
  
  addToMyStocks = stock => {
    let myStocksDeepClone = JSON.parse(JSON.stringify(this.state.myStocks));
    myStocksDeepClone.push(stock);
    this.setState({myStocks: myStocksDeepClone})
  }

  removeFromMyStocks = stock => {
    let myReducedStocks = this.state.myStocks.filter(s => {return s.id !== stock.id});
    this.setState({myStocks: myReducedStocks})
  }

  filteredStocks = stocks => {
    return stocks.filter(s => {return s.type === this.state.filter})
  }

  sortedStocks = stocks => {
    if (this.state.sortType === 'Alphabetically') return stocks.sort(function(a, b) {return a.name.localeCompare(b.name)})
    else return stocks.sort(function(a, b) {return a.price - b.price})
  }

  setSort = value => {
    this.setState({sortType: value})
  }

  changeFilter = newFilter => {
    this.setState({filter: newFilter})
  }

  render() {
    return (
      <div>
        <SearchBar 
          changeFilter={newFilter => this.changeFilter(newFilter)} 
          sortType={this.state.sortType} 
          setSort={value => this.setSort(value)}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                stocks={this.sortedStocks(this.filteredStocks(this.state.stocks))} 
                addOrRemoveFromMyStocks={stock => this.addOrRemoveFromMyStocks(stock)}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
                myStocks={this.state.myStocks} 
                addOrRemoveFromMyStocks={stock => this.addOrRemoveFromMyStocks(stock)}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
