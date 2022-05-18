import React from "react";

import axios from "axios";

import { StyledButton } from "../../../styles/StyledButton";

const BaseUrl = "http://localhost:3000/";

export const ReplyCommentBtn = ({
  postId,
  commentId,
  subCommentsData,
  setSubCommentsData,
}) => {
  const sendLike = async (e) => {
    e.preventDefault();

    const payload = {
      // userId: user._id,
    };
    const postUrl = BaseUrl + `comment/${commentId}/like/`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setSubCommentsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledButton onMouseDown={sendLike} $bold $padding $muted>
        <div className="comment-interaction_btn_btn">reply</div>
      </StyledButton>
      {subCommentsData.length ? (
        <StyledButton className="comment-interaction_btn_amount" $padding>
          <div>
            <p>{subCommentsData.length ? subCommentsData.length : null}</p>
          </div>
        </StyledButton>
      ) : null}
    </>
  );
};
