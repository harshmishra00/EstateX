import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function Layout() {
  const location = useLocation();

  return (
    <div className="layout">
      <ScrollToTop />
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <ScrollToTop />
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    );
  }
}

export { Layout, RequireAuth };
