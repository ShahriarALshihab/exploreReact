import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        console.log(data);
        setCountries(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Countries: {countries.length}</h1>

      {countries.map((country) => (
       
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
}

export default Countries;
