import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
const API = "http://localhost:3000/stocks";
class App extends Component {
  state = {
    stocks: [],
    myStocks: [],
    filterTerm: "",
    sortBy: "",
    selectSort: "All"
  };

  componentDidMount() {
    fetch(API).then(resp =>
      resp.json().then(data => this.setState({ stocks: data }))
    );
  }

  addToMyStocks = stock => {
    this.state.myStocks.push(stock);
    this.setState({ myStocks: this.state.myStocks });
  };

  removeFromMyStocks = stock => {
    let index = this.state.myStocks.findIndex(s => {
      return s.id === stock.id;
    });
    this.state.myStocks.splice(index, 1);
    this.setState({ myStocks: this.state.myStocks });
  };

  handleRadio = event => {
    this.setState({ sortBy: event.target.value });
  };

  handleSelect = event => {
    this.setState({ selectSort: event.target.value });
  };
  chooseStocks = () => {
    let tempStocks = [...this.state.stocks];

    if (this.state.selectSort === "All") {
      tempStocks = [...this.state.stocks];
    } else {
      tempStocks = tempStocks.filter(
        stock => stock.type === this.state.selectSort
      );
    }
    //sort
    if (this.state.sortBy === "Alphabetically") {
      return tempStocks.sort((stockA, stockB) =>
        stockA.name.localeCompare(stockB.name)
      );
    } else if (this.state.sortBy === "Price") {
      return tempStocks.sort((stockA, stockB) => stockA.price - stockB.price);
    } else {
      return tempStocks;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          filterTerm={this.state.filterTerm}
          handleRadio={this.handleRadio}
          sortBy={this.state.sortBy}
          handleSelect={this.handleSelect}
          selectSort={this.state.selectSort}
          stocks={this.state.stocks}
          onClick={this.addToMyStocks}
          removeFromMyStocks={this.removeFromMyStocks}
          myStocks={this.state.myStocks}
          filteredStocks={this.chooseStocks()}
        />
      </div>
    );
  }
}

export default App;
