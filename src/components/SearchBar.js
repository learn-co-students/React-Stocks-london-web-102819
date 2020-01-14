import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortByStocks === "Alphabetically"} onChange={props.handleRadio}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortByStocks === "Price"} onChange={props.handleRadio}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=> props.filterStocks(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
