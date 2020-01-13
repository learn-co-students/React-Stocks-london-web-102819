import React from "react";

const SearchBar = props => {
  const { handleSortByChange, sortBy, filterBy, handleFilterByChange } = props;
  return (
    <div>
      <strong>Sort by:</strong>
      <label for="alphabetically">
        <input
          id="alphabetically"
          type="radio"
          value="alphabetically"
          checked={sortBy === "alphabetically"}
          onChange={handleSortByChange}
        />
        Alphabetically
      </label>
      &nbsp;||&nbsp;
      <label>
        <input
          type="radio"
          value="price"
          checked={sortBy === "price"}
          onChange={handleSortByChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterByChange}>
          <option
            value="Tech"
            selected={filterBy === "Tech" ? "selected" : undefined}
          >
            Tech
          </option>
          <option
            value="Sportswear"
            selected={filterBy === "Sportswear" ? "selected" : undefined}
          >
            Sportswear
          </option>
          <option
            value="Finance"
            selected={filterBy === "Finance" ? "selected" : undefined}
          >
            Finance
          </option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
