import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome page message", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Welcome to the GitHub Repository Viewer/i
  );
  expect(linkElement).toBeInTheDocument();
  // check that no error component is being loaded
  expect(screen.queryByTestId("error-component")).toBeNull();
});
