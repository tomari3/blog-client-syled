import React, { useState } from "react";

import { StyledPost } from "../../styles/StyledPost";

import { longMonth } from "../../utils/dateFormat";

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

  const postContent = (
    <div className="post-content">
      <div className="post-content-details">
        <p className="post-content-details_img">img</p>
        <p className="post-content-details_username">{author.username}</p>
        <p className="post-content-details_date">{longMonth(date)}</p>
      </div>
      <div className="post-content_tags">{tagsList}</div>
      <p className="post-content_header">{header}</p>
    </div>
  );

  const modalVariants = {
    hidden: {
      opacity: 0,
      backgroundColor: "transparent",
    },
    visible: {
      scale: 1,
      opacity: 1,
      backgroundColor: "var(--bg-overlay)",
    },
    exit: {
      scale: 0,
      opacity: 0,
      backgroundColor: "transparent",
    },
  };

  return (
    <StyledPost className="post">
      {postContent}
      <div className="post-interactions">
        <div className="post-interactions_static">
          <LikeBtn postLikes={likes} />
          <SaveBtn postSaves={saves} />
        </div>
      </div>
      <CommentBtn main toggle={toggleComments} amount={comments.length} />
      {active ? (
        <ModalBasis
          variants={modalVariants}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={toggleComments}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="post-comments-modal"
          >
            {postContent}
            <CommentSection postId={postData._id} postComments={comments} />
          </div>
        </ModalBasis>
      ) : null}
    </StyledPost>
  );
};
