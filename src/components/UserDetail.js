import { Link } from "react-router-dom";
import classes from "../styles/Details.module.css";

const UserDetail = ({ userDetail }) => {
  console.log(userDetail);

  return (
    <div className={classes.container}>
      {userDetail.map((repository) => (
        <div key={repository.id}>
          <div>
            <div>
              <img
                src={repository.owner.avatar_url}
                alt={`${repository.owner.login}'s avatar`}
              />
              <h2>{repository.owner.login}</h2>
            </div>
            <div>
              <h3>Repository: {repository.name}</h3>
              <p>{repository.description}</p>
              <p>Language: {repository.language}</p>
              <p>Stars: {repository.stargazers_count}</p>
              <p>Forks: {repository.forks_count}</p>
              <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
      <Link className={classes.link} to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default UserDetail;
