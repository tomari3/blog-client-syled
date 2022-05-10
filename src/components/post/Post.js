import { StyledPost } from "../../styles/StyledPost";

import { longMonth } from "../../utils/dateFormat";

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
    <StyledPost className="post">
      <div className="post-content">
        <div className="post-content-details">
          <p className="post-content-details_img">img</p>
          <p className="post-content-details_username">{author.username}</p>
          <p className="post-content-details_date">{longMonth(date)}</p>
        </div>
        <div className="post-content_tags">{tagsList}</div>
        <p className="post-content_header">{header}</p>
      </div>
      <div className="post-interactions">
        <div className="post-interactions_static">
          <LikeBtn postLikes={likes} />
          <SaveBtn postSaves={saves} />
        </div>
      </div>
      <CommentSection
        className="post_comments"
        postId={postData._id}
        postComments={comments}
      />
    </StyledPost>
  );
};
