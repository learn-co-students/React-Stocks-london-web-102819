import React, {useState, useEffect} from 'react';
import Stock from '../components/Stock'

function PortfolioContainer(props) {

        return (
            <div>
                <h2>My Portfolio</h2>
                {
                    props.stocks.map(s => <Stock stock = {s} key = {s.id} tradeStock = {props.tradeStock}/>)
                }
            </div>
        );
}

export default PortfolioContainer;
