export const CommentBtn = ({ toggle, amount, type }) => {
  return (
    <div className="open-comment" onClick={toggle}>
      {!amount ? <p>comment</p> : <p>see all {amount} comments</p>}
    </div>
  );
};
