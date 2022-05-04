import { StyledPost } from "../../styles/StyledPost";

import { Tag } from "../tags/Tag";
import { CommentSection } from "./commentSection/CommentSection";
import { LikeBtn } from "./LikeBtn";
import { SaveBtn } from "./SaveBtn";

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
      <div>
        <p>{author.username}</p>
        <p>{header}</p>
        <div>{tagsList}</div>
        <p>{content}</p>
      </div>
      <div>
        <LikeBtn postLikes={likes} />
        <SaveBtn postSaves={saves} />
        <CommentSection postId={postData._id} postComments={comments} />
      </div>
    </StyledPost>
  );
};
