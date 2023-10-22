import CardItem from "./CardItem";
import classes from "../styles/Card.module.css";
import { RepositoryData } from "types/RepsitoryData";
import { Link } from "react-router-dom";

interface RepositoryDetailsProps {
  repositories: RepositoryData[];
}

const Cards = ({ repositories }: RepositoryDetailsProps) => {
  return (
    <div className={classes.cards}>
      {repositories.map((repository) => (
        <CardItem key={repository.id}>
          <Link to={repository.html_url} className={classes.cardLink}>
            <h3>{repository.name}</h3>
          </Link>
          <p className={classes.cardDescription}>{repository.description}</p>
        </CardItem>
      ))}
    </div>
  );
};

export default Cards;
