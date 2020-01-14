import React, {useState, useEffect} from 'react';
import Stock from '../components/Stock'

function StockContainer(props) {

        return (
            <div>
                <h2>Stocks</h2>
                {
                    props.stocks.map(s => <Stock stock = {s} key = {s.id} tradeStock = {props.tradeStock}/>)
                }
            </div>
        );

}

export default StockContainer;
