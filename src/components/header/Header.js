import { Link } from "react-router-dom";

import { StyledHeader } from "../../styles/StyledHeader";

import { Login } from "../user/Login";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">header</Link>

      <div>
        <Link to="/post/new">write a post</Link>
        <p>profile</p>
      </div>
      <div>
        <p>login</p>
        <p>sing up</p>
      </div>
    </StyledHeader>
  );
};
