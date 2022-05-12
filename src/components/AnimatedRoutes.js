import { useLocation, Routes, Route, Outlet } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Home } from "./home/Home";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { PostForm } from "./post/PostForm";
import { Login } from "./user/Login";
import { Signup } from "./user/Signup";

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

          <Route path="/post/new" element={<PostForm />} />

          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
