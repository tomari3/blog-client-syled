import React from "react";

import axios from "axios";

import { StyledButton } from "../../../styles/StyledButton";

const BaseUrl = process.env.REACT_APP_URL;

export const LikeCommentBtn = ({
  postId,
  commentId,
  likesData,
  setLikesData,
}) => {
  const liked = likesData.find((l) => l === process.env.REACT_APP_ID);

  const sendLike = async (e) => {
    e.preventDefault();

    const payload = {
      id: process.env.REACT_APP_ID,
    };
    const postUrl = BaseUrl + `comment/${commentId}/like/`;

    try {
      const { data } = await axios.post(postUrl, payload);
      // console.log(data);
      setLikesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledButton onMouseDown={sendLike} $bold $padding $muted>
        <div className={`comment-interaction_btn_btn ${liked ? "liked" : ""}`}>
          {liked ? "liked" : "like"}
        </div>
      </StyledButton>
      {likesData.length ? (
        <StyledButton className="comment-interaction_btn_amount" $padding>
          <div>
            <p>{likesData.length ? likesData.length : null}</p>
          </div>
        </StyledButton>
      ) : null}
    </>
  );
};
