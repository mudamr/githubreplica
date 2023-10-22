# GitHub Repository Lister

GitHub Repository Lister is a web application that allows you to list and filter GitHub repositories based on a user's profile. It's a simple project to explore github api in react.

## Features

- **User Input**: Enter a GitHub username to fetch and display their repositories.
- **Repository Filtering**: Easily search and filter repositories based on their names.
- **Repository Details**: View detailed information about each repository, including its description, language, and last updated date.

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/mudamr/githubreplica.git
```

2. Install project dependencies:

```cd github-repository-lister
npm install
```

3. Start local development server:

```
npm start
```

4. Open your web browser and go to http://localhost:3000.

5. Enter a GitHub username, and the application will fetch and display the user's repositories.

### Running Tests

To run tests for this project, you can use the following command:

```
npm test
```

## Usage

1. Enter a GitHub username in the input field.
2. Click the "Search" button, or press "Enter" to load the user's repositories.
3. Use the search bar to filter repositories by name.
4. Click on a repository to view more details.

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - For client-side routing.
- [GitHub API](https://docs.github.com/en/rest) - To fetch user and repository data.

## Next Steps

1. **API Authentication**: Implement authentication to allow users to access their private GitHub repositories. Currently, the application provides access to public repositories only and has a API limit without a token.

2. **Search Filters**: Extend the search functionality by adding more filters to refine repository searches. Users could benefit from filtering options based on stars, forks, and more.

3. **User Profiles**: Add a separate API call to fetch user data. Currently this project uses the repository list api to fetch relavant user information.

4. **Improved Styling**: Improve the styling of the project by including a component library.

5. **Global Storage handling**: Enhance performance by adding a global state storage library like redux to store loaded repositories and avoid hitting the api call everytime.

## Important Note

The current version of the application is subject to GitHub's API rate limits. You may encounter limitations on the number of requests you can make in a specific time frame. Be aware of this constraint while using the application. For more information please refer to next steps point 1.
