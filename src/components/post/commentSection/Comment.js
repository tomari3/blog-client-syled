import React, { useState } from "react";

import { LikeCommentBtn } from "./LikeCommentBtn";
import { ReplyCommentBtn } from "./replyCommentBtn";

import { timeAgo } from "../../../utils/dateFormat";

export const Comment = ({ commentData }) => {
  const [likesData, setLikesData] = useState(commentData.likes);
  const [subCommentsData, setSubCommentsData] = useState(
    commentData.subComments
  );

  const {
    author: { username },
    _id,
    content,
    date,
    parent: postId,
  } = commentData;

  return (
    <div className="comment">
      <div className="comment-side">
        <p className="comment-side_img">img</p>
        <span className="comment-side_line"></span>
      </div>
      <div className="comment-content">
        <p className="comment-content_name">{username}</p>
        <p className="comment-content_content">{content}</p>
      </div>
      <div className="comment-interaction">
        <div className="comment-interaction_btn">
          <LikeCommentBtn
            likesData={likesData}
            setLikesData={setLikesData}
            commentId={_id}
            postId={postId}
          />
          <ReplyCommentBtn
            subCommentsData={subCommentsData}
            setSubCommentsData={setSubCommentsData}
            commentId={_id}
            postId={postId}
          />
        </div>
        <span className="comment-interaction_date">{timeAgo(date)}</span>
      </div>
    </div>
  );
};
