import React from "react";
import { Link } from "react-router-dom";
const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.ccn3}`}>
      <div className="card m-4" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={country.flags.png}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{country.name.common}</h5>
          <p className="card-text">
            Population :
            <span className="weight">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p className="card-text">
            Region : <span className="weight">{country.region}</span>
          </p>
          <p className="card-text">
            SubRegion : <span className="weight">{country.subregion}</span>
          </p>

          <p className="card-text">
            capital : <span className="weight">{country.capital}</span>
          </p>
          <p className="card-text">
            area : <span className="weight">{country.area + ` sq km`}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
