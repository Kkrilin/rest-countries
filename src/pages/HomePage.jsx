import { useEffect, useState, createContext } from "react";
// import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CountryCard from "../cards/CountryCard";
import Loading from "../components/Loading";
import Sort from "../components/Sort";
import Favicon from "react-favicon";
// import "bootstrap/dist/css/bootstrap.css";

// export const ThemeContext = createContext();

function HomePage() {
  // const [mode, setMode] = useState("light");
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [subregion, setSubRegion] = useState("");
  const [search, setSearch] = useState("");
  const [dataloaded, setDataLoaded] = useState(false);
  const [message, setMessage] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");

  console.log(sort);
  console.log(order);
  let filtercountries = countries;
  // console.log(countries[0]);

  if (region !== "" && region !== "Filter by Region") {
    filtercountries = filtercountries.filter(
      (country) => country.region === region
    );
  }
  if (subregion !== "" && subregion !== "Filter by subRegion") {
    filtercountries = filtercountries.filter(
      (country) => country.subregion === subregion
    );
  }
  if (search !== "") {
    filtercountries = filtercountries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  if (sort !== "" && order !== "") {
    let sortLowerCase = sort.toLowerCase();
    let orderLowerCase = order.toLowerCase();

    filtercountries = filtercountries.sort((a, b) => {
      if (orderLowerCase === "ascending") {
        return a[sortLowerCase] - b[sortLowerCase];
      } else {
        return b[sortLowerCase] - a[sortLowerCase];
      }
    });
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          setDataLoaded(true);
          throw new Error(
            `data fetching unsuccessful with status code:${response.status}(${response.statusText})`
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setCountries(data);
        setDataLoaded(true);
        document.title = "Where in the world"
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);
  return (
    <>
      {/* <ThemeContext.Provider value={{ mode, setMode }}>
        <Header />
      </ThemeContext.Provider> */}
      <Favicon url='https://img.freepik.com/premium-vector/globe-icon-vector-illustration-white-map-continents-world_721440-784.jpg'/>
      <div className="search_filter_bar p-4 filter-container d-flex justify-content-between">
        <div className="w-50">
          <SearchBar setSearch={setSearch} />
          <Sort setOrder={setOrder} setSort={setSort} />
        </div>
        <Filter
          region={region}
          setSubRegion={setSubRegion}
          setRegion={setRegion}
          countries={countries}
        />
      </div>
      {dataloaded ? (
        filtercountries.length === 0 ? (
          <h1 className="message">{message || `no such country found`}</h1>
        ) : (
          <div className="country_container d-flex flex-wrap justify-content-center">
            {filtercountries.map((country) => {
              return (
                <CountryCard key={country.name.official} country={country} />
              );
            })}
          </div>
        )
      ) : (
        <Loading />
      )}
    </>
  );
}

export default HomePage;
