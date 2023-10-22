import { Link } from "react-router-dom";
import classes from "../styles/Details.module.css";
import { UserDetail } from "types/RepositoryData";

interface UserDetailsProps {
  user: UserDetail;
}

// Side bar containing user name and avatar.
const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <div>
      <div className={classes.info}>
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
        <p>{user.login}</p>
        <Link to={user.html_url}>View on GitHub</Link>
      </div>
    </div>
  );
};

export default UserDetails;
