import React from "react";

const SearchBar = ({
  handleTypeChange,
  selectedType,
  handleSortByChange,
  sortBy
}) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sortBy"
          checked={sortBy === "Alphabetically"}
          onChange={handleSortByChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sortBy"
          checked={sortBy === "Price"}
          onChange={handleSortByChange}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select
          name="selectedType"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
