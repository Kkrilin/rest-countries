import React, { useEffect, useState } from "react";
import CountryDetail from "../components/CountryDetail";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
const DetailPage = () => {
  const [countrydetail, setCountryDetail] = useState({});
  const [data, setData] = useState([]);
  const { id } = useParams();
  const allCountryMap = data.reduce((acc, cur) => {
    acc[cur.cca3] = cur.name.common;
    return acc;
  }, {});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    setCountryDetail({});
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountryDetail(...data);
      });
  }, [id]);

  return (
    <>
      <Link className="back_link" to={".."}>
        <button className="back" type="button">
          <i className="bi bi-arrow-left"></i>
          <span>Back</span>
        </button>
      </Link>
      {Object.keys(countrydetail).length === 0 && <Loading />}
      {Object.keys(countrydetail).length !== 0 && (
        <CountryDetail
        allCountryMap={allCountryMap}
          countrydetail={countrydetail}
        />
      )}
    </>
  );
};

export default DetailPage;
