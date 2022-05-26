import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPost = styled(motion.article)`
  cursor: pointer;
  padding: 1rem;
  background-color: var(--primaryLighter);
  min-width: 350px;
  display: flex;
  flex-direction: column;

  border: 1px solid var(--primaryDark);
  border-bottom: 0;

  &:last-child {
    border: 1px solid var(--primaryDark);
  }

  .post-content {
    flex: 1;
    border-bottom: 1px solid var(--primaryDark);
    padding-bottom: 2rem;
    margin-bottom: 1rem;
  }

  .post-content-details {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1.5rem 1fr;
    grid-template-areas: "img username" "img date";

    column-gap: 1rem;
  }

  .post-content-details_username {
    grid-area: username;
    text-transform: capitalize;
    padding: 4px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  .post-content-details_date {
    grid-area: date;
    font-size: 0.8rem;
    padding: 0 0 0 4px;
  }

  .post-content-details_img {
    grid-area: img;
    height: 100%;
    aspect-ratio: 1;
    background-color: var(--accent);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-content_tags {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0;
  }

  .post-content_header {
    font-size: 2rem;
    font-weight: bold;
  }

  .post-interactions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .interaction-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    button {
      transition: all 0.3s ease;
      border-radius: 100%;
      padding: 5px;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      &:is(.liked, .saved) {
        path,
        polygon {
          stroke: var(--accent);
          fill: var(--accent);
        }
      }

      svg,
      polygon {
        transform: translate(0px, 1px);
        height: 3ch;

        &.Like {
          transform: translate(0px, 2px);
        }
      }
    }

    &:hover {
      button {
        color: var(--accent);

        &.svg {
          background-color: var(--accentSofter);
          svg path,
          polygon {
            stroke: var(--accent);
          }
        }
      }
    }
  }

  .comment-input {
    form {
      display: flex;
    }
    padding-bottom: 2px;
  }
`;
