import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListGitReposApi from "../api/gitrepositorybyuser";
import UserDetails from "../components/UserDetail";
import detailsCss from "../styles/Details.module.css";
import { RepositoryData } from "types/RepositoryData";
import SearchBar from "components/SearchBar";
import Cards from "components/Cards";

const Detail = () => {
  // Get repository data from React Router's data loader.
  const data = useLoaderData() as RepositoryData[];

  // Search bar input states
  const [filteredRepository, setFilteredRepository] = useState(data);
  const [searchBarInput, setSearchBarInput] = useState("");

  // First entry returned from the repository list api. It is used to extract user data instead of calling another api call.
  const [firstEntry] = Object.values(data);
  const { owner } = firstEntry;

  // Handler for search bar input changes.
  const searchBarInputHandler = (e) => {
    const input = e.target.value;
    setSearchBarInput(input);
  };

  // Filter repositories based on the search bar input. Check if any repository name contains the typed input.
  useEffect(() => {
    if (searchBarInput) {
      const filtered = data.filter((repository) =>
        repository.name.toLowerCase().includes(searchBarInput.toLowerCase())
      );
      setFilteredRepository(filtered);
    } else {
      setFilteredRepository(data);
    }
  }, [searchBarInput, data]);

  return (
    <div className={detailsCss.container}>
      <div className={detailsCss.sidebar}>
        <Link className={detailsCss.link} to="/">
          Back to Home
        </Link>
        <UserDetails user={owner} />
      </div>
      <div className={detailsCss.content}>
        <div className={detailsCss.topRight}>
          <SearchBar
            searchBarInputHandler={searchBarInputHandler}
            value={searchBarInput}
            placeholder="Search for repository"
          />
        </div>
        <Cards repositories={filteredRepository} />
      </div>
    </div>
  );
};

export default Detail;

// Loader function to fetch repository list for a specific user. username is extracted from path url.
export const loader = async ({ request, params }) => {
  const userId: string = params.userId;
  const response = await ListGitReposApi(userId);
  return response;
};
