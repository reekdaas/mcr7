import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

export default function DestinationCard({ data, conti, country }) {
  console.log(conti);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${conti}/${country}/${data.name}`);
    // console.log(data);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={data?.image} alt={data?.name} />
      <p>{data?.name}</p>
    </div>
  );
}
