import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({ data, country }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${data.name}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={data?.image} alt={data?.name} />
      <p>{data?.name}</p>
    </div>
  );
}
