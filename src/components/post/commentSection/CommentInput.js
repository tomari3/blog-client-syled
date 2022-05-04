export const CommentInput = ({ send, value, set }) => {
  return (
    <div>
      <form onSubmit={send}>
        <input
          type="text"
          placeholder="comment"
          value={value}
          onChange={(e) => set(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};
