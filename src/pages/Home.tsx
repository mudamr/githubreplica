import classes from "../styles/Home.module.css";

// Home component renders landing page content.
const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.heading}>
          Welcome to the GitHub Repository Viewer!
        </h2>
        <p className={classes.paragraph}>
          Search for a GitHub user to view their repositories.
        </p>
      </div>
    </>
  );
};

export default Home;
