import { useLocation, Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Layout } from "./Layout";
import { PersistLogin } from "./PersistLogin";
import { Home } from "./pages/Home";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./RequireAuth";
import { Unauthorized } from "./pages/Unauthorized";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

export const AnimatedRoutes = ({ toggle }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout toggle={toggle} />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
