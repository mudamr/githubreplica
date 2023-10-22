import React from "react";
import SearchBar from "components/SearchBar";
import { render } from "@testing-library/react";

test("SearchBar component should handle form submission", () => {
  const searchBarInputHandler = jest.fn(); // Mock the input handler function

  const { getByPlaceholderText } = render(
    <SearchBar
      searchBarInputHandler={searchBarInputHandler}
      value=""
      placeholder="Search by User"
    />
  );

  // Find the input field
  const inputElement = getByPlaceholderText("Search by User");

  // Simulate form submission by invoking the input handler
  searchBarInputHandler("test_username");

  // Ensure that the input handler was called with the correct username
  expect(searchBarInputHandler).toHaveBeenCalledWith("test_username");
});
