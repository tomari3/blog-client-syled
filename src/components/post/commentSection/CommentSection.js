import React, { useEffect } from "react";

import axios from "../../../utils/axios";

import { StyledCommentSection } from "../../../styles/StyledCommentSection";
import { Comments } from "./Comments";

export const CommentSection = ({ postId, commentsData, setCommentsData }) => {
  const fetchData = async () => {
    const payload = {};
    const postUrl = `post/${postId}/comments`;

    try {
      const { data } = await axios.get(postUrl, payload);
      setCommentsData(data);
    } catch (error) {}
  };
  useEffect(() => {
    if (commentsData[0]._id) {
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledCommentSection className="post_comment-section">
      {<Comments data={commentsData} />}
    </StyledCommentSection>
  );
};
