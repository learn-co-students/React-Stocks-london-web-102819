import React from 'react';

const SearchBar = props => {

  const isChecked = value => {
    return props.sortType === value ? true : false
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={isChecked("Alphabetically")} onChange={e => props.setSort(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={isChecked("Price")} onChange={e => props.setSort(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={e => props.changeFilter(`${e.target.value}`)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>

    </div>
  );
}


export default SearchBar;
