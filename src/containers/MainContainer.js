import React, {useState, useEffect} from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const StocksURL = "http://localhost:3000/stocks";


function MainContainer() {

    const [stockSort, setStockSort] = useState("Alphabetically");
    const [stockTypeFilter, setStockTypeFilter] = useState("All");
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch(StocksURL)
            .then(data => data.json())
            .then(stocks => stocks.map(s => ({...s, inPortfolio: false})))
            .then(returnedStocks => setStocks(returnedStocks) )
    }, [])

    function tradeStock(stock) {
        setStocks(stocks.map(s => {
                if (s.id === stock.id) s.inPortfolio = !s.inPortfolio;
                return s;
        }))
    }

    const stocksToRender = stocks.filter(s => s.type === stockTypeFilter || stockTypeFilter === "All");

    const sortedStocksToRender = (stockSort === "Alphabetically") ?  
        stocksToRender.sort((a,b) => (a.ticker).localeCompare(b.ticker))
        : stocksToRender.sort((a, b) => a.price - b.price);


    return (
        <div>
            <SearchBar 
                stockSort = {stockSort} 
                changeStockSort = {newSort => setStockSort(newSort)} 
                changeFilter = {newFilter => setStockTypeFilter(newFilter)}
            />

            <div className="row">
                <div className="col-8">
                    <StockContainer 
                        stocks = {sortedStocksToRender} 
                        tradeStock = {tradeStock}
                    />
                </div>
                <div className="col-4">
                    <PortfolioContainer 
                        stocks = {sortedStocksToRender.filter(s => s.inPortfolio)} 
                        tradeStock = {tradeStock}
                    />
                </div>
            </div>
        </div>
    );

}

export default MainContainer;
