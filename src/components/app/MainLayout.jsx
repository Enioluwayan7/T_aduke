import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../ui";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div class="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
