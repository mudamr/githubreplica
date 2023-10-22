import Detail from "./pages/Detail";
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./pages/Header";
import { loader as userDetailLoader } from "./pages/Detail";

function App() {
  // Define the routes for the application.
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Header />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/:userId",
          element: <Detail />,
          errorElement: <NotFound />,
          loader: userDetailLoader,
        },
      ],
    },
  ];

  // Create browser router based on defined routes
  const router = createBrowserRouter(routes);

  // Return the prouter provider so routing functions are available through the whole app.
  return <RouterProvider router={router} />;
}

export default App;
