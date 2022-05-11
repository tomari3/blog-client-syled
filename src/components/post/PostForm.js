import React, { useState } from "react";

import axios from "axios";

import { StyledButton } from "../../styles/StyledButton";

const BaseUrl = process.env.REACT_APP_URL;

export const PostForm = () => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("");
  const [isPinned, setIsPinned] = useState(Boolean);

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
      <form onSubmit={submitPost}>
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
          <div
            style={{ opacity: 0.8, fontSize: ".8rem" }}
            className="form-field-detail"
          >
            can be changed later
          </div>
          <div className="form-field-err"></div>
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
        <StyledButton type="submit">post</StyledButton>
      </form>
    </div>
  );
};
