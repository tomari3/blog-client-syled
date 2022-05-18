import React, { useState } from "react";

import axios from "axios";

import { timeAgo } from "../../../utils/dateFormat";

const BaseUrl = process.env.REACT_APP_URL;

export const Comment = ({ data }) => {
  const {
    author: { username },
    _id,
    content,
    date,
    likes,
    parent,
    subComments,
  } = data;

  const likesNum = likes.length > 0 ? likes.length : null;
  const replyNum = subComments.length > 0 ? subComments.length : null;

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
        <span className="b">like {likesNum}</span>
        <span className="b">reply {replyNum}</span>
        <span className="w">{timeAgo(date)}</span>
      </div>
    </div>
  );
};
