import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { StyledHeader } from "../../styles/StyledHeader";

export const Header = () => {
  const { auth } = useAuth();

  return (
    <StyledHeader>
      <Link to="/">home</Link>

      {!auth?.username ? (
        <div>
          <Link to="/login">login</Link>
          <Link to="/signup">sing up</Link>
        </div>
      ) : (
        <div>
          <Link to="/logout">logout</Link>
          <br />
          <Link to="/profile">profile</Link>
        </div>
      )}
    </StyledHeader>
  );
};
