import { useLocation, Routes, Route, Outlet } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Home } from "./home/Home";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { PostFormPage } from "./PostFormPage";
import { LoginPage } from "./user/LoginPage";
import { SignupPage } from "./user/SignupPage";

function LayoutsWithNavbar({ toggle }) {
  return (
    <>
      <Header toggle={toggle} />

      <Outlet />

      <Footer />
    </>
  );
}

export const AnimatedRoutes = ({ toggle }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LayoutsWithNavbar toggle={toggle} />}>
          <Route path="/" element={<Home />} />

          <Route path="/post/new" element={<PostFormPage />} />

          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
