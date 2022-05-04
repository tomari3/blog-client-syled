import React from "react";
import { Post } from "./Post";

export const PostGallery = ({ postsData }) => {
  const postGallery = !postsData
    ? null
    : postsData.map((postData, index) => {
        return index >= 10 ? null : (
          <Post key={postData._id} postData={postData} />
        );
      });

  return <div>{postGallery}</div>;
};

export const MemoPostGallery = React.memo(PostGallery);
