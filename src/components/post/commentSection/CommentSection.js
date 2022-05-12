import React, { useState } from "react";

import axios from "axios";

import { StyledCommentSection } from "../../../styles/StyledCommentSection";

import { Comments } from "./Comments";
import { CommentInput } from "./CommentInput";

const BaseUrl = "http://localhost:3000/";

export const CommentSection = ({ postId, postComments, className, active }) => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState(postComments);

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
    <StyledCommentSection className={`${className} comments-modal `}>
      <CommentInput
        main
        send={sendComment}
        value={inputValue}
        set={setInputValue}
      />
      <Comments data={comments} />
    </StyledCommentSection>
  );
};
