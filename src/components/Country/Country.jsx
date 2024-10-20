import { useState } from "react";
import "./Country.css";

function Country(props) {
  const { country } = props;
  const { name, capital, flags, timezones } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country ">
      <h2>{name?.common}</h2>
      <h4>Capital: {capital}</h4>
      <img src={flags.png}></img>
      <p>TimeZone: {timezones}</p>
      <button  onClick={handleVisited} disabled={visited}>
        {visited ? "Done" : "Remaining..."}
      
      </button>
    </div>
  );
}

export default Country;
