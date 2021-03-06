import React, { useState } from "react";

import { axiosPrivate } from "../../utils/axios";

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
  const [savesData, setSavesData] = useState(postData.saves);
  const [commentsData, setCommentsData] = useState(postData.comments);
  const [commentModal, setCommentModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);

  const { _id, author, content, date, tags } = postData;

  const tagsList = tags.map((tag, index) => {
    return index >= 4 ? null : <Tag key={tag._id} tagData={tag} />;
  });

  const postContent = (
    <div className="post-content">
      <div className="post-content-details">
        <p className="post-content-details_img">img</p>
        <p className="post-content-details_username">{author?.username}</p>
        <p className="post-content-details_date">{timeAgo(date)}</p>
      </div>
      <div className="post-content_tags">{tagsList}</div>
      <p className="post-content_content">{content}</p>
    </div>
  );

  const amount = commentsData.length;

  const fetchPost = async () => {
    const postUrl = `posts/${_id}`;

    const { data } = await axiosPrivate.get(postUrl);
    console.log(data);
  };

  return (
    <StyledPost onClick={fetchPost} className="post">
      {postContent}
      <div onClick={(e) => e.stopPropagation()} className="post-interactions">
        <LikeBtn
          likesData={likesData}
          setLikesData={setLikesData}
          postId={_id}
        />
        <SaveBtn
          savesData={savesData}
          setSavesData={setSavesData}
          postId={_id}
        />
        <CommentBtn
          main
          toggleComment={() => setCommentModal(!commentModal)}
          toggleComments={() => setCommentsModal(!commentsModal)}
          amount={amount}
        />
      </div>
      {commentModal ? (
        <CommentInput
          onClick={(e) => e.stopPropagation()}
          closeInput={() => setCommentModal(false)}
          openComments={() => setCommentsModal(true)}
          setCommentsData={setCommentsData}
          postId={_id}
        />
      ) : null}
      {commentsModal ? (
        <CommentSection
          onClick={(e) => e.stopPropagation()}
          commentsData={commentsData}
          setCommentsData={setCommentsData}
          postId={_id}
        />
      ) : null}
    </StyledPost>
  );
};
