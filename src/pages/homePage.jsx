import Card from "../component/cardComponent";
import { data } from "../data";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome To Trip Advisor</h1>
      <h2>Top Continents For Your Holiday</h2>
      {data.continents.map((country) => (
        <Card data={country} key={data?.id} />
      ))}
    </div>
  );
}
