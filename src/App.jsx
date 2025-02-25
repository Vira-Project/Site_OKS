import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout";
import { ROUTES } from "./config/routes";

// pages
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import Entrance from "./pages/entrance/entrance";
import Education from "./pages/educational/Education";
import Photos from "./pages/photos/photos";
import Registration from "./pages/registration/registration";
import Error from "./pages/error/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.portfolio,
        element: <Portfolio />,
      },
      {
        path: ROUTES.login,
        element: <Entrance />,
      },
      {
        path: ROUTES.education,
        element: <Education />,
      },
      {
        path: ROUTES.photos,
        element: <Photos />,
      },
      {
        path: ROUTES.register,
        element: <Registration />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
