import React, { useEffect, useState } from "react";
import axios from "axios";

const Covid = (props) => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
      const { data } = await axios(props.url);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    FetchData();
  }, [props.url]);

  return (
    <div>
      <div className="covidData__country__info">
        {<img src={data?.countryInfo?.flag || " "} /> || <h1>No image</h1>}
        <p>Country Name : {data.country} </p>

        <p>Cases : {data.cases || 0}</p>

        <p>Deaths : {data.deaths || 0}</p>

        <p>Recovered : {data.recovered || 0}</p>

        <p>Cases Today : {data.todayCases || 0}</p>

        <p>Deaths Today : {data.deathCases || 0}</p>

        <p>Recovered Today : {data.recoveredCases || 0}</p>
      </div>
    </div>
  );
};

export default Covid;
