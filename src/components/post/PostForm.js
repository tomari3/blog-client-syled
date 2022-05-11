import React, { useState } from "react";
import { StyledButton } from "../../styles/StyledButton";

export const PostForm = () => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [pinned, setPinned] = useState(Boolean);
  const [visibility, setVisibility] = useState(Boolean);

  return (
    <div>
      <form>
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
          <input
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
          <input
            type="checkbox"
            id="pin"
            name="pin"
            value={pinned}
            onChange={(e) => setPinned(!pinned)}
          />
          <label htmlFor="pin">pin post</label>
          <div className="form-field-detail"></div>
          <div className="form-field-err"></div>
        </div>

        <div className="form-field">
          <input
            type="checkbox"
            id="visibility"
            name="visibility"
            value={visibility}
            onChange={(e) => setVisibility(!visibility)}
          />
          <label htmlFor="visibility">visibility</label>
          <div className="form-field-detail"></div>
          <div className="form-field-err"></div>
        </div>
        <StyledButton>post</StyledButton>
      </form>
    </div>
  );
};
