import { StyledButton } from "../../../styles/StyledButton";

export const CommentBtn = ({ toggle, amount, main, className }) => {
  const styled = main ? "main" : "sub";

  return (
    <StyledButton
      className={`comment-btn ${styled} ${className ? className : ""}`}
      onClick={toggle}
    >
      {!amount ? `comment` : `see all ${amount} comments`}
    </StyledButton>
  );
};
