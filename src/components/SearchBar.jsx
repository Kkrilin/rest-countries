import React from "react";

const SearchBar = ({ setSearch }) => {
  const HandleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="input-group mb-3 w-100">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-search"></i>
        </span>
      </div>
      <input
        type="text"
        onInput={HandleSearchInput}
        className="search form-control"
        placeholder="Search for a country"
        aria-label="search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchBar;
