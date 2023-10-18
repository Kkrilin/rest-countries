import React, { useEffect, useState } from "react";
import CountryDetail from "../components/CountryDetail";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
const DetailPage = () => {
  const [countrydetail, setCountryDetail] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCountryDetail(...data);
      });
  }, []);
  return (
    <>
      <Link to={".."}>
        <button type="button">Back</button>
      </Link>
      {Object.keys(countrydetail).length === 0 && <Loading />}
      {Object.keys(countrydetail).length !== 0 && (
        <CountryDetail countrydetail={countrydetail} />
      )}
    </>
  );
};

export default DetailPage;
