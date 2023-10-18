import React from "react";

const CountryDetail = ({ countrydetail }) => {
  console.log(countrydetail);

  const nativeName = Object.values(countrydetail.name.nativeName).map(
    ({ common }) => common
  );
  const population = countrydetail.population
  const region = countrydetail.region
  const subRegion = countrydetail.subregion
  const capital = countrydetail.capital[0]
  const topLevelDomain = countrydetail.tld[0]
  const currencies = Object.values(countrydetail.currencies).map(
    ({ name }) => name
  ).join(',');
  const languages = Object.values(countrydetail.languages).join(',')
  console.log(nativeName);
  return (
    <div className="country_detail d-flex">
      <div className="img">
        <img src={countrydetail.flags.png} alt="" />
      </div>
      <div className="info_container">
        <div className="country_name">
          <h1>{countrydetail.name.common}</h1>
          <div className="country_info d-flex">
            <div className="left_info">
              <p className="title">
                Natvie Name: <span className="value">{nativeName[0]}</span>
              </p>
              <p className="title">
                population: <span className="value">{population.toLocaleString()}</span>
              </p>
              <p className="title">
                region: <span className="value">{region}</span>
              </p>
              <p className="title">
                Sub Region: <span className="value">{subRegion}</span>
              </p>
              <p className="title">
                Capital: <span className="value">{capital}</span>
              </p>
            </div>
            <div className="right_info">
              <p className="title">
                Top Level Domain: <span className="value">{topLevelDomain}</span>
              </p>
              <p className="title">
                Currencies: <span className="value">{currencies}</span>
              </p>
              <p className="title">
                Languages: <span className="value">{languages}</span>
              </p>
            </div>
          </div>
          <div className="border_countries">
            <p>Border Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
