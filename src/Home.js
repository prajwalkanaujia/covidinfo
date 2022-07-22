import React from "react";
import { useState } from "react";
import Covid from "./Covid";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Home = () => {
  const [country, setCountry] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://disease.sh/v3/covid-19/countries/${country}`;
    setUrl(url);
  };

  return (
    <>
      <NavBar />
      <div className="covidData">
        <h1>COVID-19 CASES COUNTRY WISE</h1>
        <div className="covidData__input">
          <form onSubmit={handleSubmit}>
            {/* input county name */}
            <input
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <br />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <Covid url={url} />
      <Footer />
    </>
  );
};

export default Home;
