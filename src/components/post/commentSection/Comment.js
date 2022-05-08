import React, { useState } from "react";

import { DateTime } from "luxon";
import axios from "axios";

import { CommentLike } from "./CommentLike";
import { CommentBtn } from "./CommentBtn";
import { CommentInput } from "./CommentInput";
import { Comments } from "./Comments";

const BaseUrl = "http://localhost:3000/";

export const Comment = ({ data }) => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState(data.comments);

  const date = DateTime.fromISO(data.date).toFormat("yyyy LLL dd");

  const toggleComments = () => {
    setActive(!active);
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const payload = {
      content: inputValue,
    };
    const postUrl = BaseUrl + `post/${data.comment._id}/comment`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setComments(data);
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comment">
      <div className="comment-details">
        <div className="comment-details_user">
          <p className="comment-details_user_img">img</p>
          <p className="comment-details_user_name">user</p>
          <p className="comment-details_user_date">{date}</p>
        </div>
        <p className="comment-details_content">{data.content}</p>
      </div>
      <div className="comment-interact">
        <div className="comment-interact_btn">
          <CommentBtn toggle={toggleComments} />
          <CommentLike commentId={data._id} commentLikes={data.likes} />
        </div>
        {active ? (
          <>
            <CommentInput
              send={sendComment}
              value={inputValue}
              set={setInputValue}
            />
            <Comments data={comments} />
          </>
        ) : null}
      </div>
    </div>
  );
};
