import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar
          handleRadio={this.props.handleRadio}
          sortBy={this.props.sortBy}
          handleSelect={this.props.handleSelect}
          selectSort={this.props.selectSort}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              filteredStocks={this.props.filteredStocks}
              // stocks={this.props.stocks}
              onClick={this.props.onClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myStocks={this.props.myStocks}
              removeStock={this.props.removeFromMyStocks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
