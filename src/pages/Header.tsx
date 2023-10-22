import React, { FormEvent, useState } from "react";
import { Outlet, Form, Link, useNavigate } from "react-router-dom";
import classes from "../styles/Header.module.css";
import SearchBar from "../components/SearchBar";

const Header = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`${username}`);
  };

  return (
    <>
      <header className={classes.header}>
        <Link to="/">Github Repository Viewer</Link>
        <Form method="post" onClick={handleSubmit}>
          <SearchBar
            searchBarInputHandler={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Search by User"
          />
        </Form>
      </header>
      <Outlet />
    </>
  );
};
export default Header;
