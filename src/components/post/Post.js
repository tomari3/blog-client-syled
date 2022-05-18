import React, { useState } from "react";

import { StyledPost } from "../../styles/StyledPost";

import { timeAgo } from "../../utils/dateFormat";

import { Tag } from "../tags/Tag";
import { CommentBtn } from "./commentSection/CommentBtn";
import { LikeBtn } from "./LikeBtn";
import { SaveBtn } from "./SaveBtn";
import { CommentInput } from "./commentSection/CommentInput";
import { CommentSection } from "./commentSection/CommentSection";

export const Post = ({ postData }) => {
  const [likesData, setLikesData] = useState(postData.likes);
  const [commentsData, setCommentsData] = useState(postData.comments);
  const [commentModal, setCommentModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);

  const { _id, author, content, date, saves, tags } = postData;

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
        <LikeBtn
          likesData={likesData}
          setLikesData={setLikesData}
          postId={_id}
        />
        <SaveBtn postSaves={saves} />
        <CommentBtn
          main
          toggleComment={() => setCommentModal(!commentModal)}
          toggleComments={() => setCommentsModal(!commentsModal)}
          amount={commentsData.length}
        />
      </div>
      {commentModal ? (
        <CommentInput setCommentsData={setCommentsData} postId={_id} />
      ) : null}
      {commentsModal ? (
        <CommentSection
          commentsData={commentsData}
          setCommentsData={setCommentsData}
          postId={_id}
        />
      ) : null}
    </StyledPost>
  );
};
