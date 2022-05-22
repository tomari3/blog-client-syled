import React, { useState } from "react";

import { LikeCommentBtn } from "./LikeCommentBtn";
import { ReplyCommentBtn } from "./replyCommentBtn";

import { timeAgo } from "../../../utils/dateFormat";
import { StyledComment } from "../../../styles/StyledComment";
import { SubCommentInput } from "./SubCommentInput";
import { SubComments } from "./SubComments";

export const Comment = ({ commentData, sub }) => {
  const [commentModal, setCommentModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);
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
    <StyledComment
      className={sub ? "comments_sub-comment" : "comments_comment"}
    >
      <div className={sub ? "sub-comment" : "comment"}>
        <div className="comment-side-up">
          <p className="comment-side-up_img">img</p>
        </div>
        <div className="comment-side-down">
          <span className="comment-side-down_line"></span>
          <span className="comment-side-down_line"></span>
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
              amount={subCommentsData.length}
              toggleComment={() => setCommentModal(!commentModal)}
              toggleComments={() => setCommentsModal(!commentsModal)}
            />
          </div>
          <span className="comment-interaction_date">{timeAgo(date)}</span>
        </div>
      </div>
      {commentModal ? (
        <SubCommentInput
          toggleComment={() => setCommentModal(!commentModal)}
          toggleComments={() => setCommentsModal(!commentsModal)}
          setSubCommentsData={setSubCommentsData}
          commentId={_id}
        />
      ) : null}
      {commentsModal ? (
        <SubComments
          commentId={_id}
          setSubCommentsData={setSubCommentsData}
          subCommentsData={subCommentsData}
          data={subCommentsData}
        />
      ) : null}
    </StyledComment>
  );
};
