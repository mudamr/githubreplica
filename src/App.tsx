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

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
