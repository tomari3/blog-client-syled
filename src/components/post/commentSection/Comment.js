import React, { useState } from "react";

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
    <div>
      <p>{data.content}</p>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <CommentLike commentId={data._id} commentLikes={data.likes} />
        <CommentBtn toggle={toggleComments} />
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
