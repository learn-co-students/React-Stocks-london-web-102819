import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const STOCK_URL = "http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    selectedType: "All",
    sortBy: "Alphabetically"
  };

  componentDidMount() {
    fetch(STOCK_URL)
      .then(res => res.json())
      .then(stocks => this.setState({ stocks: stocks }));
  }

  buyStock = stockId => {
    this.setState({
      portfolio: [...this.state.portfolio, stockId]
    });
  };

  saleStock = stockId => {
    const updatedPortfolio = [...this.state.portfolio].filter(
      p => p !== stockId
    );
    this.setState({
      portfolio: updatedPortfolio
    });
  };

  handleTypeChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSortByChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  sortedStockToDisplay = () => {
    const stocks = [...this.state.stocks].filter(
      stock =>
        stock.type === this.state.selectedType ||
        this.state.selectedType === "All"
    );

    if (this.state.sortBy === "Alphabetically") {
      stocks.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (this.state.sortBy === "Price") {
      stocks.sort((a, b) => {
        return a.price - b.price;
      });
    }
    return stocks;
  };

  render() {
    const { stocks, portfolio, selectedType, sortBy } = this.state;

    const stockToRenderInPortfolio = stocks.filter(stock =>
      portfolio.includes(stock.id)
    );
    return (
      <div>
        <SearchBar
          handleTypeChange={this.handleTypeChange}
          selectedType={selectedType}
          handleSortByChange={this.handleSortByChange}
          sortBy={sortBy}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocksToRender={this.sortedStockToDisplay()}
              handleBuyStock={this.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stockToRenderInPortfolio={stockToRenderInPortfolio}
              handleSaleStock={this.saleStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
