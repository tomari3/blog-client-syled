import React, { useState } from "react";

import axios from "axios";
import { StyledButton } from "../../styles/StyledButton";

const BaseUrl = process.env.REACT_APP_URL;

export const LikeBtn = ({ postId, likesData, setLikesData }) => {
  const liked = likesData.find((l) => l === "625af335160443835c688a22");

  const sendLike = async (e) => {
    e.preventDefault();

    const payload = {
      id: "625af335160443835c688a22",
    };
    const postUrl = BaseUrl + `post/${postId}/like`;

    try {
      const { data } = await axios.post(postUrl, payload);
      setLikesData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="interaction-btn">
      <StyledButton className="amount" $padding $small>
        <div>
          <p>{likesData.length > 0 ? likesData.length : null}</p>
        </div>
      </StyledButton>
      <StyledButton
        onClick={sendLike}
        className={`svg ${liked ? "liked" : ""}`}
        $padding
        $small
      >
        <div>
          <svg
            aria-label="Like"
            className="Like"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 "
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
      </StyledButton>
    </div>
  );
};
