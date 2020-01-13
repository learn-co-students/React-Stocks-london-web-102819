import React from "react";

const SearchBar = ({
  sortType,
  filterCategory,
  handleSortChange,
  handleFilterChange,
  handleSortUncheck
}) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortType === "Alphabetically"}
          onChange={handleSortChange}
          onClick={handleSortUncheck}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortType === "Price"}
          onChange={handleSortChange}
          onClick={handleSortUncheck}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
