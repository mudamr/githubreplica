import React, { FormEvent, useState } from "react";
import { Outlet, Form, Link, useNavigate } from "react-router-dom";
import classes from "../styles/Header.module.css";
import SearchBar from "../components/SearchBar";

// Header component is the top-level component that displays the site header and a search bar on all pages.
const Header = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Navigate to username route when form is submitted.
    navigate(username);
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
      {/* Outlet renders the child component content of current route. */}
      <Outlet />
    </>
  );
};
export default Header;
