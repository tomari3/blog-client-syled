export const CommentBtn = ({ toggle, amount }) => {
  return (
    <div className="open-comment" onClick={toggle}>
      see all {amount} comments
    </div>
  );
};
