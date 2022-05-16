import React, { useState } from "react";

import { StyledPost } from "../../styles/StyledPost";

import { timeAgo } from "../../utils/dateFormat";

import { Tag } from "../tags/Tag";
import { CommentSection } from "./commentSection/CommentSection";
import { CommentBtn } from "./commentSection/CommentBtn";
import { LikeBtn } from "./LikeBtn";
import { SaveBtn } from "./SaveBtn";
import { ModalBasis } from "../../styles/ModalBasis";

export const Post = ({ postData }) => {
  const [active, setActive] = useState(false);

  const toggleComments = () => {
    setActive(!active);
  };

  const {
    author,
    comments,
    content,
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

  const postContent = (
    <div className="post-content">
      <div className="post-content-details">
        <p className="post-content-details_img">img</p>
        <p className="post-content-details_username">{author.username}</p>
        <p className="post-content-details_date">{timeAgo(date)}</p>
      </div>
      <div className="post-content_tags">{tagsList}</div>
      <p className="post-content_content">{content}</p>
    </div>
  );

  return (
    <StyledPost className="post">
      {postContent}
      <div className="post-interactions">
        <LikeBtn postLikes={likes} />
        <SaveBtn postSaves={saves} />
        <CommentBtn main toggle={toggleComments} amount={comments.length} />
      </div>
      {active ? (
        <ModalBasis onClick={toggleComments}>
          <div
            style={{ width: "min-content" }}
            onClick={(e) => e.stopPropagation()}
          >
            <CommentSection postId={postData._id} postComments={comments} />
          </div>
        </ModalBasis>
      ) : null}
    </StyledPost>
  );
};
