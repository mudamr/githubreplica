import React from "react";
import { Link, useRouteError } from "react-router-dom";
import classes from "../styles/Error.module.css";

interface ErrorData {
  status: number; // HTTP status code of error
  data: {
    message: string; // Message describing error
  };
}

// NotFound component is used to display different error messages based on the error status.
//This component will be as errorElement in react router dom.
const NotFound = () => {
  const error = useRouteError() as ErrorData;
  let message = "Something went wrong";
  if (error.status === 404) {
    message = "The page you are looking for does not exist";
  }

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 403) {
    message = "You do not have access to view this information.";
  }

  return (
    <>
      <div className={classes.container} data-testid="error-component">
        <h2 className={classes.header}>{message}</h2>
        <p className={classes.paragraph}>
          Go back to search for a GitHub user and view their repositories.
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
};

export default NotFound;
