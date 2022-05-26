import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";

import { ProfileMenu } from "./ProfileMenu";

import { StyledButton } from "../../styles/StyledButton";
import { StyledHeader } from "../../styles/StyledHeader";

export const Header = () => {
  const { auth, setAuth } = useAuth();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    setAuth({});
  };

  return (
    <StyledHeader className="Header">
      <div className="header">
        <div className="header_logo">
          <StyledButton as={Link} to="/">
            BHFC
          </StyledButton>
        </div>
        <div className="header_search">
          <input />
        </div>
        <nav className="header_nav">
          {!auth?.username ? (
            <>
              <Link to="/login">login</Link>
              <Link to="/signup">sing up</Link>
            </>
          ) : (
            <div className="header_nav_profile-menu">
              <ProfileMenu />
            </div>
          )}
        </nav>
      </div>

      {!auth?.username ? <div></div> : <></>}
    </StyledHeader>
  );
};
