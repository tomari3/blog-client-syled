import React from "react";

import { StyledPostGallery } from "../../styles/StyledPostGallery";

import { Post } from "./Post";

export const PostGallery = ({ postsData, className }) => {
  const postGallery = !postsData
    ? null
    : postsData.map((postData, index) => {
        return index >= 10 ? null : (
          <Post key={postData._id} postData={postData} />
        );
      });

  return (
    <StyledPostGallery className={className}>{postGallery}</StyledPostGallery>
  );
};

export const MemoPostGallery = React.memo(PostGallery);
