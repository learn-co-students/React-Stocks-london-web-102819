import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import API from '../db/API'

class MainContainer extends Component {
  state = {
      stocks: [],
      myStocks: [],
      filter: "All",
      sortBy: null
  }
  render() {
    const { myStocks } = this.state 

    return (
      <div>
        <SearchBar onFilterStocks={this.onFilterStocks} onSelectSortType={this.onSelectSortType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
                stocks={this.selectedStocks()} 
                onAddingToMyStocks={this.onAddingToMyStocks}
                myStocks={myStocks}
                removeFromMyStocks={this.removeFromMyStocks}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
                myStocks={myStocks}
                removeFromMyStocks={this.removeFromMyStocks}
              />

            </div>
          </div>
      </div>
    );
  }

  //logics:
  stocks = () => API.GET_STOCK().then(data => this.setState({stocks: data}))
  componentDidMount(){
    this.stocks();
  }
//dropDown filter
  onFilterStocks = (type) =>{
    this.setState({
      filter: type
    });
  }

//radioButton sort
  onSelectSortType = (type) =>{
    this.setState({
      sortBy: type
    })
  }
//filter && sort
  selectedStocks = () => {
    const {stocks, filter,sortBy} = this.state;
    const filteredStocks = () => {
      if (filter === "All") return stocks;
      return stocks.filter(stock => stock.type === filter)
    };
    if (sortBy === "Alphabetically" ){
      return filteredStocks().slice().sort((a,b)=>(a.name).localeCompare (b.name))
    } 
    if (sortBy ==='Price'){
      return filteredStocks().slice().sort((a,b)=>a.price - b.price)
    }
    return filteredStocks();
  }
//adding to myStocks
  onAddingToMyStocks = (stockID) => {
    if (this.state.myStocks.find(stock => stock.id ===stockID)) return; 
    this.setState({
      myStocks:[
        ...this.state.myStocks,
        this.state.stocks.find(stock => stock.id === stockID)
      ]
    })
  }
//remove from myStocks
  removeFromMyStocks = (stockID) => {
    this.setState({
      myStocks: this.state.myStocks.filter(stock => stock.id !== stockID)
    })
  }
}

export default MainContainer;
