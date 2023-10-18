import React from "react";

const Filter = ({ setSubRegion, region, setRegion, countries }) => {
  // const regionList = countries
  //   .map((country) => country.region)
  //   .filter((region, index, arr) => index === arr.indexOf(region));

  const regionList = [...new Set(countries.map((country) => country.region))];

  const MapRegionAndSubRegion = new Map();

  countries.forEach((country) => {
    if (MapRegionAndSubRegion.has(country.region)) {
      if (
        !MapRegionAndSubRegion.get(country.region).includes(
          country.subregion
        ) &&
        country.subregion !== undefined
      )
        MapRegionAndSubRegion.get(country.region).push(country.subregion);
    } else {
      MapRegionAndSubRegion.set(country.region, []);
    }
  });

  const HandleRegionChange = (e) => {
    setRegion(e.target.value);
    setSubRegion("");
  };

  const HandleSubRegionChange = (e) => {
    setSubRegion(e.target.value);
  };

  let subRegionList = [];
  if (region !== "" && region !== "Filter by Region") {
    subRegionList = MapRegionAndSubRegion.get(region);
  }

  return (
    <div className="form-group w-25">
      <select
        onChange={HandleRegionChange}
        className="form-control"
        id="exampleFormControlSelect1"
      >
        <option>Filter by Region</option>
        {regionList.map((region) => {
          return (
            <option key={region} value={region}>
              {region}
            </option>
          );
        })}
      </select>
      <select
        onChange={HandleSubRegionChange}
        className="form-control my-2"
        id="exampleFormControlSelect2"
      >
        <option>Filter by subRegion</option>
        {subRegionList.map((subregion) => {
          return (
            <option key={subregion} value={subregion}>
              {subregion}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
