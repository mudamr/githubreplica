import CardItem from "./CardItem";
import classes from "../styles/Card.module.css";
import { RepositoryData } from "types/RepsitoryData";

interface RepositoryDetailsProps {
  repositories: RepositoryData[];
}

const Cards = ({ repositories }: RepositoryDetailsProps) => {
  const content = repositories.map((repository) => {
    return (
      <div className={classes.container} key={repository.id}>
        <CardItem>
          <h3>Repository: {repository.name}</h3>
          <p>{repository.description}</p>
          <a href={repository.html_url}>View on GitHub</a>
        </CardItem>
      </div>
    );
  });
  return content;
};

export default Cards;
