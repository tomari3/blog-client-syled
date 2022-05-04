import React from "react";
import { StyledTagsBar } from "../../styles/StyledTagsBar";

export const TagsBar = ({ tagsData }) => {
  // return the first 10
  const tagsBar = !tagsData
    ? null
    : tagsData.map((tagData, index) => {
        return index >= 10 ? null : (
          <div key={tagData._id}>
            <p>{tagData.name}</p>
          </div>
        );
      });

  return (
    <StyledTagsBar>
      <div className="title">recent tags</div>
      <div className="tags-bar">{tagsBar}</div>
    </StyledTagsBar>
  );
};

export const MemoTagsBar = React.memo(TagsBar);
