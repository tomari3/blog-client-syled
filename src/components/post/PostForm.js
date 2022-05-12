import React, { useState, useEffect } from "react";

import axios from "axios";

import { StyledButton } from "../../styles/StyledButton";
import { StyledForm } from "../../styles/StyledForm";

const BaseUrl = process.env.REACT_APP_URL;

export const PostForm = () => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("");
  const [isPinned, setIsPinned] = useState(Boolean);

  const fetchData = async () => {
    const getURL = BaseUrl + `post/new`;

    const { data } = await axios(getURL);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitPost = async (e) => {
    e.preventDefault();

    const payload = {
      id: "625af335160443835c688a22",
      header: header,
      content: content,
      status: status,
      isPinned: isPinned,
      tags: tags,
    };
    const postUrl = BaseUrl + `post/new`;

    try {
      const { data } = await axios.post(postUrl, payload);

      console.log(data);

      setHeader("");
      setContent("");
      setTags("");
      setStatus("");
      setIsPinned(Boolean);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        margin: "0 50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledForm onSubmit={submitPost}>
        <div className="form-field">
          <label htmlFor="header">header</label>
          <input
            type="text"
            name="header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <div className="form-field-err"></div>
        </div>

        <div className="form-field">
          <label htmlFor="content">content</label>
          <textarea
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="form-field-err"></div>
        </div>

        <div className="form-field">
          <label htmlFor="tags">tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <div className="form-field-err"></div>
        </div>

        <div className="form-field">
          <legend>Select post status</legend>
          <div className="form-field-detail"></div>
          <div className="form-field-err"></div>
          <div>
            <div>
              <input
                type="radio"
                id="status"
                name="status"
                value="private"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="status">private</label>
            </div>
            <div>
              <input
                checked
                type="radio"
                id="status"
                name="status"
                value="public"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="pin">public</label>
            </div>
          </div>
        </div>

        <div className="form-field">
          <input
            type="checkbox"
            id="isPinned"
            name="isPinned"
            value={status}
            onChange={(e) => setIsPinned(!isPinned)}
          />
          <label htmlFor="isPinned">pin post</label>
          <div className="form-field-detail"></div>
          <div className="form-field-err"></div>
        </div>
        <StyledButton color="var(--primary-accent)" type="submit">
          post
        </StyledButton>
      </StyledForm>
    </div>
  );
};
