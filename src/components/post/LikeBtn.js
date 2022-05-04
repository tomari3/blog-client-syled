import React, { useState } from "react";

import axios from "axios";

const BaseUrl = "http://localhost:3000/";

export const LikeBtn = ({ postId, postLikes }) => {
  const [active, setActive] = useState(false);
  const [likes, setLikes] = useState(postLikes);

  const toggleLike = () => {
    setActive(!active);
  };

  const sendLike = async (e) => {
    e.preventDefault();

    const payload = {
      // userId: user._id,
    };
    const postUrl = BaseUrl + `post/${postId}/like`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setLikes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>{postLikes.length} likes</p>
    </div>
  );
};
