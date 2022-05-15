import { StyledButton } from "../../../styles/StyledButton";

export const CommentBtn = ({ toggle, amount, main, className }) => {
  const styled = main ? "main" : "sub";

  return (
    <div className="interaction-btn">
      <StyledButton
        $padding
        $small
        className={`amount ${styled} ${className ? className : ""}`}
        onClick={toggle}
      >
        <div>
          <p>{!amount ? "" : amount}</p>
        </div>
      </StyledButton>
      <StyledButton
        $padding
        $small
        className={`svg ${styled} ${className ? className : ""}`}
        onClick={toggle}
      >
        <div>
          <svg
            aria-label="Comment"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
      </StyledButton>
    </div>
  );
};
