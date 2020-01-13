import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const STOCKS_URL = "http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: [],
    stockInProfolio: [],
    sortBy: "alphabetically",
    filterBy: "Finance"
  };

  componentDidMount() {
    fetch(STOCKS_URL)
      .then(res => res.json())
      .then(stocks => this.setState({ stocks }));
  }

  // checkStock = stockId => {
  //   const stocks = [...this.state.stocks];
  // };

  // checkStock = stockId => this.state.stockInProfolio.includes(stockId);

  handleSortByChange = event => {
    this.setState({
      sortBy: event.target.value
    });
  };

  handleFilterByChange = event => {
    this.setState({
      filterBy: event.target.value
    });
  };

  stocksToDisplay = () => {
    const stocks = [...this.state.stocks].filter(
      stock => stock.type === this.state.filterBy
    );

    if (this.state.sortBy === "alphabetically") {
      stocks.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (this.state.sortBy === "price") {
      stocks.sort((a, b) => {
        return a.price - b.price;
      });
    }

    return stocks;
  };

  handleBuyStock = stock => {
    const stocks = [...this.state.stockInProfolio];
    if (stocks.includes(stock)) {
      return window.alert("you've aleready bought this stock");
    }

    this.setState({
      stockInProfolio: [...this.state.stockInProfolio, stock]
    });
  };

  handleSaleStock = stock => {
    const stocks = [...this.state.stockInProfolio];
    const stockToSale = stocks.filter(s => s.id !== stock.id);

    this.setState({
      stockInProfolio: stockToSale
    });
  };

  render() {
    const { stocks, stockInProfolio, sortBy, filterBy } = this.state;
    return (
      <div>
        <SearchBar
          sortBy={sortBy}
          handleSortByChange={this.handleSortByChange}
          filterBy={filterBy}
          handleFilterByChange={this.handleFilterByChange}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              stocksToRender={this.stocksToDisplay()}
              handleBuyStock={this.handleBuyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stockInProfolio={stockInProfolio}
              checkStock={this.checkStock}
              stocks={stocks}
              onSaleStock={this.handleSaleStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
