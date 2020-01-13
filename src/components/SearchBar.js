import React from 'react';

const SearchBar = ({stockSort, changeStockSort, changeFilter}) => {
   
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
          <input type="radio" value="Alphabetically" checked={stockSort === "Alphabetically" ? true : false} 
              onChange={e => changeStockSort(e.target.value)}
          />
        Alphabetically
      </label>
      <label>
          <input type="radio" value="Price" checked={stockSort === "Price" ? true : false} 
              onChange={e => changeStockSort(e.target.value)}
          />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
          <select onChange={e => changeFilter(e.target.value)}>
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
