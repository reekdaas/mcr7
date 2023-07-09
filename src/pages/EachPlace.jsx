import { useParams } from "react-router-dom";
import { data } from "../data";
import DestinationCard from "../component/destinationCard";

export default function EachPlace() {
  const { countries, name, place } = useParams();
  console.log(countries);
  console.log(name);
  console.log(place);
  const continent = data.continents.find(({ name }) => name === countries);
  // console.log(continent);
  const country = continent.countries.find((data) => data.name === name);
  const EachPlace = country.destinations.find((pla) => pla.name === place);
  console.log(EachPlace);

  return (
    <div>
      <h1>Welcome To Trip Advisor</h1>
      <h2>Top Continents For Your Holiday</h2>
      {/* {country.destinations.map((country) => (
        <DestinationCard
          data={country}
          key={data?.id}
          continent={countries}
          country={name}
        />
      ))} */}
    </div>
  );
}
