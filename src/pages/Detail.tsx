import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListGitReposApi from "../api/gitrepositorybyuser";
import UserDetails from "../components/UserDetail";
import detailsCss from "../styles/Details.module.css";
import { RepositoryData } from "types/RepsitoryData";
import SearchBar from "components/SearchBar";
import Cards from "components/Cards";
import cardCss from "../styles/Card.module.css";

const Detail = () => {
  const data = useLoaderData() as RepositoryData[];
  const [filteredRepository, setFilteredRepository] = useState(data);
  const [searchBarInput, setSearchBarInput] = useState("");
  const [firstEntry] = Object.values(data);
  const { owner } = firstEntry;

  const searchBarInputHandler = (e) => {
    const input = e.target.value;
    setSearchBarInput(input);
  };

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
        <div className={`${cardCss.cards}`}>
          <Cards repositories={filteredRepository} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

export const loader = async ({ request, params }) => {
  const userId: string = params.userId;
  const response = await ListGitReposApi(userId);
  return response;
};
