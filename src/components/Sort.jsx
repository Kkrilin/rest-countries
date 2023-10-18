import React from "react";

const Sort = ({ setSort, setOrder }) => {
  const HandleSortChange = (e) => {
    if (e.target.value !== "sort by") {
      setSort(e.target.value);
    } else {
      setSort("");
    }
  };
  const HandleOrderChange = (e) => {
    if (e.target.value !== "order by") {
      setOrder(e.target.value);
    } else {
      setOrder("");
    }
  };

  return (
    <div className="form-group w-25 d-flex w-50">
      <select
        onChange={HandleSortChange}
        className="form-control"
        id="exampleFormControlSelect3"
      >
        <option>sort by</option>
        <option value="Population">Population</option>
        <option value="Area">Area</option>
      </select>
      <select
        onChange={HandleOrderChange}
        className="form-control mx-2"
        id="exampleFormControlSelect4"
      >
        <option>order by</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
};

export default Sort;
