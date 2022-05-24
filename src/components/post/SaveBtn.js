import React from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

import { StyledButton } from "../../styles/StyledButton";

export const SaveBtn = ({ postId, savesData, setSavesData }) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const saved = savesData.find((s) => s === auth?._id);

  const sendSave = async (e) => {
    e.preventDefault();

    const payload = {
      id: auth?._id,
    };
    const postUrl = `posts/${postId}/save`;

    try {
      const { data } = await axiosPrivate.post(postUrl, payload);
      setSavesData(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="interaction-btn">
      <StyledButton className="amount" $padding $small>
        <div>
          <p>{savesData.length > 0 ? savesData.length : null}</p>
        </div>
      </StyledButton>
      <StyledButton
        onClick={sendSave}
        className={`svg ${saved ? "saved" : ""}`}
        $padding
        $small
      >
        <div>
          <svg
            aria-label="Save"
            className="Save"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1"
            ></polygon>
          </svg>
        </div>
      </StyledButton>
    </div>
  );
};
