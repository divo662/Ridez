import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Header />
    <main className="pt-20 min-h-screen bg-background">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout; 