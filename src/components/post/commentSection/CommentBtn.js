import { StyledButton } from "../../../styles/StyledButton";

export const CommentBtn = ({ toggle, amount, main }) => {
  const styled = main ? "main" : "sub";

  return (
    <StyledButton className={`comment-btn ${styled}`} onClick={toggle}>
      {!amount ? `comment` : `see all ${amount} comments`}
    </StyledButton>
  );
};
