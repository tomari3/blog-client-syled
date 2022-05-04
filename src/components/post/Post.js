export const Post = ({ postData }) => {
  const {
    author,
    comments,
    content,
    header,
    isPinned,
    likes,
    saves,
    status,
    tags,
  } = postData;

  return (
    <div>
      <p>{author.username}</p>
      <p>{header}</p>
      <p>{content}</p>
    </div>
  );
};
