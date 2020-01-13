import React from "react";


const SearchBar = (props) =>{
  const { onFilterStocks,onSelectSortType } = props;

  const onSelectType = (e) =>{
    onFilterStocks(e.target.value)
  };

  const sortAlphabetically = React.createRef();
  const sortByPrice = React.createRef(); 

  const onSelectSort = (e) =>{
    if (e.target.value === 'Alphabetically') sortByPrice.current.checked = false;
    if (e.target.value === 'Price') sortAlphabetically.current.checked = false;
    // console.log(sortAlphabetically, sortByPrice)
    onSelectSortType(e.target.value)
  }
  return (
    <div>
      <div onChange={onSelectSort}>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" ref={sortAlphabetically} checked={null} />
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" ref={sortByPrice} checked={null}/>
          Price
        </label>
        <br/>
      </div>
      <label>
        <strong>Filter:</strong>
        <select onChange={onSelectType}>
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
