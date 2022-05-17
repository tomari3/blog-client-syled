import React, { useState, useEffect } from "react";

import axios from "axios";

import { StyledCommentSection } from "../../../styles/StyledCommentSection";

import { Comments } from "./Comments";

const BaseUrl = process.env.REACT_APP_URL;

export const CommentSection = ({ postId, commentsData, setCommentsData }) => {
  const fetchData = async () => {
    const payload = {};
    const postUrl = BaseUrl + `post/${postId}/comments`;

    try {
      const { data } = await axios.get(postUrl, payload);
      setCommentsData(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledCommentSection>
      {<Comments data={commentsData} />}
    </StyledCommentSection>
  );
};
