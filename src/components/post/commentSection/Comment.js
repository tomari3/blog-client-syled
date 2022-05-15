import React, { useState } from "react";

import axios from "axios";

import { longMonth } from "../../../utils/dateFormat";

import { LikeCommentBtn } from "./LikeCommentBtn";
import { CommentBtn } from "./CommentBtn";
import { CommentInput } from "./CommentInput";
import { SubComments } from "./SubComments";

const BaseUrl = "http://localhost:3000/";

export const Comment = ({ data }) => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [subComments, setSubComments] = useState(data.subComments);

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
      setSubComments(data);
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
          <p className="comment-details_user_date">{longMonth(data.date)}</p>
        </div>
        <p className="comment-details_content">{data.content}</p>
      </div>
      <div className="comment-interact">
        <div className="comment-interact_btn">
          <CommentBtn
            className={active ? "active" : ""}
            toggle={toggleComments}
          />
          <LikeCommentBtn commentId={data._id} commentLikes={data.likes} />
        </div>
        {active ? (
          <>
            <CommentInput
              send={sendComment}
              value={inputValue}
              set={setInputValue}
            />
            {subComments.length > 0 ? <SubComments data={subComments} /> : null}
          </>
        ) : null}
      </div>
    </div>
  );
};
