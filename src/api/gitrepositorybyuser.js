import { json } from "react-router-dom";

// Api call that takes username and returns list of public repositories.
const ListGitReposApi = async (userId) => {
  const response = await fetch(`https://api.github.com/users/${userId}/repos`);
  if (!response.ok) {
    throw json(
      { message: "Could not find user page." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export default ListGitReposApi;
