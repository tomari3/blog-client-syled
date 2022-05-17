import React from "react";
import { StyledTag } from "../../styles/StyledTag";
import { StyledTagsBar } from "../../styles/StyledTagsBar";

export const TagsBar = ({ tagsData }) => {
  // return the first 10
  const tagsBar = !tagsData
    ? null
    : tagsData.map((tagData, index) => {
        return index >= 10 ? null : (
          <StyledTag key={tagData._id}>{tagData.name}</StyledTag>
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
