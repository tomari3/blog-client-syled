import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { axiosPrivate } from "../../utils/axios";

import { StyledHeader } from "../../styles/StyledHeader";
import { StyledButton } from "../../styles/StyledButton";

export const Header = () => {
  const { auth } = useAuth();
  const logout = async () => {
    const payload = {
      id: auth?._id,
    };
    const postUrl = `auth/logout`;

    try {
      const result = await axiosPrivate.get(postUrl, payload);
      console.log(result);
    } catch (error) {
      console.log(error);

      setTimeout(() => {}, 5000);
    }
  };
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
          <Link to="/profile">profile</Link>
          <br />
          <StyledButton onClick={logout}>logout</StyledButton>
        </div>
      )}
    </StyledHeader>
  );
};
