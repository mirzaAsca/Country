import React, {useState, useEffect } from "react";


function Description(props) {

  const {country} = props;
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://restcountries.com/v2/name/${country.name}`);
        const data = await response.json();
        setApiData(data[0]);
      } catch (error) {
        console.error(error); // log the error to the console
        setApiData(null); // set the data to null to show an error message to the user
      }
    }
  
    if (country) {
      fetchData();
    }
  }, [country]);

  if (!apiData) {
    return <p>An error occurred while fetching data. Please try again later.</p>;
  }

 

  return (
    <div className="container">
        <h3>Podaci</h3>
      <div className="user_table">
      <div>Drzava</div>
        <div>Glavni grad</div>
        <div>Broj stanovnika</div>
        <div>Povrsina</div>
        <div>Valute</div>
        <div>Vremenske zone</div>
        
      </div>
      <div className="user_table_body">
      <div>{apiData.name}</div>
              <div>{apiData.capital}</div>
              <div>{apiData.population}</div>
              <div>{apiData.area}</div>
              <div>{apiData.currencies[0].code}</div>
              <div>{apiData.timezones[0]}</div>
      </div>
    </div>
  );
}

export default Description;
