import { StyledPost } from "../../styles/StyledPost";

export const Post = ({ postData }) => {
  const {
    author,
    comments,
    content,
    header,
    date,
    isPinned,
    likes,
    saves,
    status,
    tags,
  } = postData;

  return (
    <StyledPost>
      <p>name: {author.username}</p>
      <p>header: {header}</p>
      <p>content: {content}</p>
    </StyledPost>
  );
};
