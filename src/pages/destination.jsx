import { useParams } from "react-router-dom";
import { data } from "../data";
import DestinationCard from "../component/destinationCard";

export default function DestinationPage() {
  const { countries, name } = useParams();
  console.log(countries);
  console.log(name);
  const continent = data.continents.find(({ name }) => name === countries);
  // console.log(continent);
  const country = continent.countries.find((data) => data.name === name);
  // console.log(country.destinations);

  return (
    <div>
      <h1>Welcome To Trip Advisor</h1>
      <h2>Top Continents For Your Holiday</h2>
      {country.destinations.map((country) => (
        <DestinationCard
          data={country}
          key={data?.id}
          conti={countries}
          country={name}
        />
      ))}
    </div>
  );
}
