import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";

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
    <StyledHeader>
      <Link to="/">BHFC</Link>

      {!auth?.username ? (
        <div>
          <Link to="/login">login</Link>
          <Link to="/signup">sing up</Link>
        </div>
      ) : (
        <>
          <StyledButton as={Link} to="/profile">
            profile
          </StyledButton>
          <StyledButton onClick={signOut}>Log out</StyledButton>
        </>
      )}
    </StyledHeader>
  );
};
