import { Link } from "react-router-dom";

import { StyledHeader } from "../../styles/StyledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">home</Link>

      <div>
        <Link to="/login">login</Link>
        <Link to="/signup">sing up</Link>
      </div>
    </StyledHeader>
  );
};
