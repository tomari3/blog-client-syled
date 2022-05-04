import React, { useState } from "react";

import axios from "axios";

import { StyledCommentSection } from "../../../styles/StyledCommentSection";

import { Comments } from "./Comments";
import { CommentBtn } from "./CommentBtn";
import { CommentInput } from "./CommentInput";

const BaseUrl = "http://localhost:3000/";

export const CommentSection = ({ postId, postComments }) => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState(postComments);

  const toggleComments = () => {
    setActive(!active);
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const payload = {
      content: inputValue,
    };
    const postUrl = BaseUrl + `post/${postId}/comment`;

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
    <StyledCommentSection>
      <CommentBtn toggle={toggleComments} amount={comments.length} />
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
    </StyledCommentSection>
  );
};
