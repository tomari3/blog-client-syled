import { StyledButton, StyledSubmit } from "../../../styles/StyledButton";
import { Send } from "../../svgs/Send";

export const CommentInput = ({ send, value, set, main }) => {
  const styled = main ? "main" : "sub";

  const resize = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className={`comment-input ${styled}`}>
      <form onSubmit={send}>
        <textarea
          type="text"
          autoComplete="on"
          autoCorrect="on"
          autoFocus
          maxLength={1400}
          spellCheck="true"
          wrap="hard"
          placeholder="share your thoughts"
          value={value}
          onKeyDown={resize}
          onChange={(e) => set(e.target.value)}
        />
        <StyledButton $color type="submit">
          reply
        </StyledButton>
      </form>
    </div>
  );
};
