import { createBrowserRouter } from "react-router-dom";
// Layout
import { MainLayout } from "../components/app";

// Pages
import Homepage from "../pages/Home";
import AboutUsPage from "../pages/AboutUs";
import StorePage from "../pages/Store";
import ContactPage from "../pages/Contact";
import LoginPage from "../pages/Login";
import CollectionsPage from "../pages/Collection";
import Checkout from "../pages/Checkout";

// Error
import Error404 from "../pages/Error404";

const mainRoute = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/collections",
        element: <CollectionsPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  { path: "*", element: <Error404 /> },
]);

export default mainRoute;
