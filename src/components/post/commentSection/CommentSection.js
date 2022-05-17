import React, { useState, useEffect } from "react";

import axios from "axios";

import { StyledCommentSection } from "../../../styles/StyledCommentSection";

import { Comments } from "./Comments";

const BaseUrl = process.env.REACT_APP_URL;

export const CommentSection = ({ postId }) => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    const payload = {};
    const postUrl = BaseUrl + `post/${postId}/comments`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sendComment = async (e) => {
    e.preventDefault();

    const payload = {
      content: inputValue,
    };
    const postUrl = BaseUrl + `post/${postId}/comment`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledCommentSection>
      <Comments data={data} />
    </StyledCommentSection>
  );
};
