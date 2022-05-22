import { StyledButton } from "../../../styles/StyledButton";

export const ReplyCommentBtn = ({ amount, toggleComment, toggleComments }) => {
  return (
    <>
      <StyledButton onClick={toggleComment} $bold $padding $muted>
        <div className="comment-interaction_btn_btn">reply</div>
      </StyledButton>
      {amount ? (
        <StyledButton
          onClick={toggleComments}
          className="comment-interaction_btn_amount"
          $padding
        >
          <div>
            <p>{amount ? amount : null}</p>
          </div>
        </StyledButton>
      ) : null}
    </>
  );
};
