import React from "react";
import classes from "../styles/SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search by user"
        onChange={props.searchBarInputHandler}
        value={props.value}
      />
      <button className={classes.clearButton} type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          viewBox="0 0 24 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
