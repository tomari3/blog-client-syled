import { StyledHeader } from "../../styles/StyledHeader";

import { Login } from "../user/Login";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>header</h1>
      <Login />
    </StyledHeader>
  );
};
