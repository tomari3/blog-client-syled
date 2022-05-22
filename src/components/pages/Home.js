import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { StyledHome } from "../../styles/StyledHome";

import { MemoPostGallery } from "../post/PostGallery";
import { MemoTagsBar } from "../tags/TagsBar";
import { PostFormPrompt } from "../post/PostFormPrompt";

export const Home = () => {
  const [tagsData, setTagsData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const { width: w } = useWindowDimensions();

  const fetchData = async () => {
    const {
      data: { posts, tags },
    } = await axios.get("/");
    setTagsData(tags);
    setPostsData(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const e = {
    m: w > 500,
    l: w > 1200,
    LEFT: (
      <div key={"l"} className="l">
        <MemoTagsBar tagsData={tagsData} />
      </div>
    ),
    MIDDLE: (
      <div key={"m"} className="m">
        <PostFormPrompt setPostsData={setPostsData} />
        <MemoPostGallery postsData={postsData} />
      </div>
    ),
    RIGHT: (
      <div key={"r"} className="r">
        <MemoTagsBar tagsData={tagsData} />
      </div>
    ),
  };

  return (
    <StyledHome>
      {{
        [e.m]: [e.LEFT, e.MIDDLE],
        [e.l]: [e.LEFT, e.MIDDLE, e.RIGHT],
      }[true] || e.MIDDLE}
    </StyledHome>
  );
};
