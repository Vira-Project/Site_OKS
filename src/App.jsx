import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout";
import { ROUTES } from "./config/routes";

import { useEffect, useState } from "react";

// pages
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import Entrance from "./pages/entrance/entrance";
import Education from "./pages/education/education";
import Photos from "./pages/photos/photos";
import Registration from "./pages/registration/registration";
import Error from "./pages/error/error";

function App() {
  const [accountStatus, setAccountStatus] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout accountStatus={accountStatus} />,
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
          element: <Entrance setAccountStatus={setAccountStatus} />,
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
          element: <Registration setAccountStatus={setAccountStatus} />,
        },
      ],
    },
  ]);
  // const fetchAPI = async () => {
  //   const respone = await axios.get("http://localhost:8080/api/users");
  //   console.log(respone.data.users);
  // };

  useEffect(() => {}, [accountStatus]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
