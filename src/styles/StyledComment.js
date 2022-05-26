import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledComment = styled(motion.div)`
  --line: 2px;
  --side: 35px;
  display: grid;
  grid-template-columns: var(--side) auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: "comment comment" "line sub" "input input";
  .comment,
  .sub-comment {
    grid-area: comment;
    display: grid;
    grid-template-columns: var(--side) 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "up comment" "down interaction";
    column-gap: calc(var(--side) / 4);
    row-gap: 0.5rem;
  }

  .sub-comment {
    & ~ .comment_line {
      span {
        height: calc(100% - 2rem + 5px);
        top: calc(-1.5rem - 10px);
      }
    }
    .comment-side-up {
      .comment-side-up_img {
        position: relative;
        width: calc(var(--side) - 10px);
        &:before {
          bottom: calc(50% - var(--line) / 2);
          left: calc(-50% - (var(--line) / 2) - 10px);
          position: absolute;
          content: "";
          aspect-ratio: 1;
          width: 0.8rem;
          border-width: 0 0 var(--line) var(--line);
          border-style: solid;
          border-color: var(--primaryDark);
          border-bottom-left-radius: 0.5rem;
        }
      }
    }
  }

  .comment_line {
    grid-area: line;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    span {
      top: -1.5rem;
      position: absolute;
      width: 2px;
      height: calc(100% - 2rem - 5px);
      background-color: var(--primaryDark);
    }
  }
  .comment-section_sub-comments {
    grid-area: sub;
    padding: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .comment-side-up {
    grid-area: up;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .comment-side-up_img {
    width: var(--side);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--accent);
    aspect-ratio: 1;
    border-radius: 100%;
    grid-area: img;
  }

  .comment-content {
    grid-area: comment;
    background-color: var(--primaryDark);
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border-radius: var(--radiusSmall);

    .comment-content_name {
      text-transform: capitalize;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  .comment-interaction {
    grid-area: interaction;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--textLighter);
  }

  .comment-interaction_btn {
    display: flex;
    gap: 0.5rem;
  }

  .comment-interaction_btn_btn {
    &.liked {
      color: var(--accent);
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .comment-interaction_btn_amount {
    &:hover {
      text-decoration: underline;
    }
  }

  .comment-input {
    padding: 5px 0;
    grid-area: input;
    form {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
    }
    button {
      margin-left: 0.5rem;
      width: 25px;
      aspect-ratio: 1;
    }
  }
`;
