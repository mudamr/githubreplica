import CardItem from "./CardItem";
import classes from "../styles/Card.module.css";
import { RepositoryData } from "types/RepositoryData";
import { Link } from "react-router-dom";
import { getLanguageColor } from "utils/LanguageColors";

interface RepositoryDetailsProps {
  repositories: RepositoryData[]; // Array containing list of repositories based on a single user
}

// Cards component that displays a list of repositories.
const Cards = ({ repositories }: RepositoryDetailsProps) => {
  return (
    <div className={classes.cards}>
      {repositories.map((repository) => (
        <CardItem key={repository.id}>
          <Link to={repository.html_url} className={classes.cardLink}>
            <h3>{repository.name}</h3>
          </Link>
          <p className={classes.cardDescription}>{repository.description}</p>
          <div className={classes.additonalInfo}>
            <p>
              <span
                className={classes.languageLabel}
                style={{
                  backgroundColor: getLanguageColor(repository.language),
                }}
              ></span>
              {repository.language}
            </p>
            <p>
              Last updated:{" "}
              {new Date(repository.updated_at).toLocaleDateString()}
            </p>
          </div>
        </CardItem>
      ))}
    </div>
  );
};

export default Cards;
