import { StyledPost } from "../../styles/StyledPost";

import { Tag } from "../tags/Tag";
import { CommentSection } from "./commentSection/CommentSection";

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

  const tagsList = tags.map((tag, index) => {
    return index >= 4 ? null : <Tag key={tag._id} tagData={tag} />;
  });

  return (
    <StyledPost>
      <p>{author.username}</p>
      <div>{tagsList}</div>
      <p>{header}</p>
      <p>{content}</p>
      <div>
        <CommentSection postId={postData._id} postComments={comments} />
      </div>
    </StyledPost>
  );
};
