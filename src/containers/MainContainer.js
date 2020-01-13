import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const StocksURL = "http://localhost:3000/stocks";


class MainContainer extends Component {


    state = {
        stockSort: "Alphabetically",
        stockTypeFilter: "All",
        stocks: []
    }      


    fetchStocks = () => {
        fetch(StocksURL)
            .then(data => data.json())
            .then(stocks => stocks.map(s => ({...s, inPortfolio: false})))
            .then(stocks => this.setState({stocks}))
    }

    componentDidMount() {
        this.fetchStocks();
    }

    tradeStock = stock => {
        this.setState({
            stocks: this.state.stocks.map(s => {
                if (s.id === stock.id) s.inPortfolio = !s.inPortfolio;
                return s;
            })
        })
    }


    changeFilter = stockTypeFilter => {
        this.setState({
           stockTypeFilter
      })
    }


    changeStockSort = stockSort => {
        this.setState({
            stockSort
        })
    }


    render() {

        const stocksToRender = this.state.stocks.filter(s =>
            s.type === this.state.stockTypeFilter ||
            this.state.stockTypeFilter === "All");

        const sortedStocksToRender = () => {
            if (this.state.stockSort === "Alphabetically") {
                return stocksToRender.sort((a,b)=> (a.ticker).localeCompare(b.ticker));
            } else {
                return stocksToRender.sort((a, b) => a.price - b.price);
            }
        }


        return (
            <div>
                <SearchBar stockSort = {this.state.stockSort} changeStockSort = {this.changeStockSort} changeFilter = {this.changeFilter}/>

                <div className="row">
                    <div className="col-8">
                        <StockContainer 
                            stocks = {sortedStocksToRender().filter(s => !s.inPortfolio)} 
                            tradeStock = {this.tradeStock }
                        />
                    </div>
                    <div className="col-4">
                        <PortfolioContainer 
                            stocks = {sortedStocksToRender().filter(s => s.inPortfolio)} 
                            tradeStock = {this.tradeStock}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default MainContainer;
