import React, { useState, useEffect } from "react";

import axios from "axios";

import { StyledCommentSection } from "../../../styles/StyledCommentSection";

import { Comments } from "./Comments";

const BaseUrl = process.env.REACT_APP_URL;

export const CommentSection = ({ postId, commentsData }) => {
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

  return (
    <StyledCommentSection>
      <Comments data={commentsData ? commentsData : data} />
    </StyledCommentSection>
  );
};
