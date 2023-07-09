import { useParams } from "react-router-dom";

import { data } from "../data";
import CountryCard from "../component/countryCard";

export default function CountryPage() {
  const { countries } = useParams();
  // console.log(name);
  const contient = data.continents.find(
    (country) => country?.name === countries
  );

  return (
    <div>
      <h1>Welcome To {countries}</h1>
      <h2>Top Continents For Your Holiday</h2>
      {contient?.countries.map((data) => (
        <CountryCard data={data} country={countries} />
      ))}
    </div>
  );
}
