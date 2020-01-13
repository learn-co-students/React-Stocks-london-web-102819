import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

    render() {
        return (
            <div>
                <h2>Stocks</h2>
                {
                    this.props.stocks.map(s => <Stock stock = {s} key = {s.id} tradeStock = {this.props.tradeStock}/>)
                }
            </div>
        );
    }

}

export default StockContainer;
