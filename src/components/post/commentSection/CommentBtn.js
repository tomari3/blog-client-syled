export const CommentBtn = ({ toggle, amount, main }) => {
  const styled = main ? "main" : "sub";

  return (
    <div className={`comment-btn ${styled}`} onClick={toggle}>
      {!amount ? <p>comment</p> : <p>see all {amount} comments</p>}
    </div>
  );
};
