import { createBrowserRouter } from "react-router-dom";
import { Layout, NotFound } from "./components";
import { Country, Home } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:country",
        element: <Country />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
