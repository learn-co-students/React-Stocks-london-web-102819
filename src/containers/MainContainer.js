import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const ENDPOINT = "http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sortType: "",
    filterCategory: ""
  };

  componentDidMount = () => {
    fetch(ENDPOINT)
      .then(resp => resp.json())
      .then(stocks => this.setState({ stocks }));
  };

  findStock = stockId => this.state.stocks.find(stock => stock.id === stockId);

  checkPortfolioForStock = stockId => this.state.portfolio.includes(stockId);

  handleStockClick = stockId => {
    const updatedPortfolio = this.state.portfolio.map(stock =>
      stock !== stockId ? stock : null
    );
    // const stock = findStock(stockId);
    this.checkPortfolioForStock(stockId)
      ? this.setState({
          portfolio: updatedPortfolio
        })
      : this.setState({
          portfolio: [...this.state.portfolio, stockId]
        });
  };

  handleFilterChange = event => {
    this.setState({
      filterCategory: event.target.value
    });
  };

  handleSortChange = event => {
    this.setState({
      sortType: event.target.value
    });
  };

  handleSortUncheck = event => {
    if (event.target.value === this.state.sortType) {
      this.setState({
        sortType: undefined
      });
    }
  };

  handleFilter = (stocks, filterType) => {
    if (filterType === "Tech") {
      return stocks.filter(stock => stock.type === "Tech");
    } else if (filterType === "Finance") {
      return stocks.filter(stock => stock.type === "Finance");
    } else if (filterType === "Sportswear") {
      return stocks.filter(stock => stock.type === "Sportswear");
    } else {
      return stocks;
    }
  };

  handleSort = (stocks, sortType) => {
    if (sortType === "Alphabetically") {
      return stocks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "Price") {
      return stocks.sort((a, b) => b.price - a.price);
    } else {
      return stocks;
    }
  };

  render() {
    const { stocks, portfolio, sortType, filterCategory } = this.state;
    const sortedStocks = this.handleSort(stocks, sortType);
    const sortedFilteredStocks = this.handleFilter(
      sortedStocks,
      filterCategory
    );

    return (
      <div>
        <SearchBar
          handleSortChange={this.handleSortChange}
          handleFilterChange={this.handleFilterChange}
          sortType={sortType}
          filterCategory={filterCategory}
          handleSortUncheck={this.handleSortUncheck}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={sortedFilteredStocks}
              handleStockClick={this.handleStockClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={portfolio}
              stocks={stocks}
              checkPortfolioForStock={this.checkPortfolioForStock}
              handleStockClick={this.handleStockClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
