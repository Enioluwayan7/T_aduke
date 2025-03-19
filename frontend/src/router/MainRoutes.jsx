import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Collections from "../pages/CollectionSrc";
import Cart from "../components/Cart"
import Billing from "../pages/Billing";

const mainRoute = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Homepage />
                },
                {
                    path: "/product",
                    element: <ProductPage />
                },
                {
                    path: "/about",
                    element: <AboutUs />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/collections",
                    element: <Collections />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/billing",
                    element: <BillingPage />
                }
            ]
        }
    ]
)

export default mainRoute