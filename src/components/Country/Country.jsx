import "./Country.css";

function Country(props) {
  // eslint-disable-next-line react/prop-types
  const { country } = props;
  const { name, capital, flags, timezones } = country;
  console.log(country);

  return (
    <div className="country">
      <h2>{name?.common}</h2>
      <h4>Capital: {capital}</h4>
      <img src={flags.png}></img>
      <p>TimeZone: {timezones}</p>
    </div>
  );
}

export default Country;
