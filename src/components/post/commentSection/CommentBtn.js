import { StyledCommentButton } from "../../../styles/StyledButton";

export const CommentBtn = ({ toggle, amount, main, className }) => {
  const styled = main ? "main" : "sub";

  return (
    <StyledCommentButton
      className={`comment-btn ${styled} ${className}`}
      onClick={toggle}
    >
      {!amount ? `comment` : `see all ${amount} comments`}
    </StyledCommentButton>
  );
};
