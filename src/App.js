import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    stocks: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(stocks => this.setState({stocks}))
  }


  render() {
    const {stocks} = this.state
    return (
      <div>
        <Header/>
        <MainContainer stocks={stocks}/>
      </div>
    );
  }
}

export default App;
