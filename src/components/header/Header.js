import { Link } from "react-router-dom";

import { StyledHeader } from "../../styles/StyledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">home</Link>

      <div>
        <Link to="/post/new">write a post</Link>
        <p>profile</p>
      </div>
      <div>
        <Link to="/user/login">login</Link>
        <Link to="/user/signup">sing up</Link>
      </div>
    </StyledHeader>
  );
};
