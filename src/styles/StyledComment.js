import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledComment = styled(motion.div)`
  --side: 35px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .comment {
    display: grid;
    grid-template-columns: 35px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "up comment" "down interaction";
    gap: 0.5rem;
  }
  .comment-section_sub-comments {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .comments_sub-comment {
    .comment-side-down {
      grid-area: down;
      display: flex;
      width: 100%;
      justify-content: center;
      position: relative;
    }

    .comment-section_sub-comments {
      margin-left: var(--side);
    }
  }
  .sub-comment {
    --margin: 0.2rem;
    display: grid;
    grid-template-columns: var(--side) 30px 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "down up comment" "down up interaction";
    gap: 0.25rem;
    .comment-content {
      margin-top: var(--margin);
    }
    .comment-side-up {
      margin-top: var(--margin);
    }

    .comment-side-down {
      grid-area: down;
      display: flex;
      width: 100%;
      justify-content: center;
      .comment-side-down_line {
        --border: 10px;
        display: block;
        background-color: var(--primary-active);
        height: calc(var(--side) - var(--border));
        position: relative;
        transform: translateY(calc(var(--side) / -2));
        &:first-child {
          width: 2px;
          &::after,
          &::before {
            content: "";
            display: block;
            position: absolute;
            width: inherit;
            background-color: inherit;
          }
          &::after {
            height: var(--side);
            width: calc(var(--side) / 2.5);
            background-color: transparent;
            border-style: solid;
            border-color: var(--primary-active);
            border-width: 0 0 2px 2px;
            border-bottom-left-radius: var(--border);
          }
          &::before {
            height: 100%;
            bottom: 100%;
          }
        }
      }
    }
  }

  .comment-side-up {
    grid-area: up;
  }
  .comment-side-up_img {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-accent);
    width: 100%;
    aspect-ratio: 1;
    border-radius: 100%;
    grid-area: img;
  }

  .comment-content {
    grid-area: comment;
    background-color: var(--primary-active);
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border-radius: var(--primary-radius);
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
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
    color: var(--muted-text);
  }

  .comment-interaction_date {
    align-self: flex-end;
  }

  .comment-interaction_btn {
    gap: 0.5rem;
    display: flex;
  }
  .comment-interaction_btn_btn {
    &.liked {
      color: var(--primary-accent);
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .comment-interaction_btn_amount {
    display: flex;
    p {
    }
    &:hover {
      text-decoration: underline;
    }
  }

  .comment-input {
    margin-left: 2.5rem;
    padding: 0;
    width: calc(100% - 2rem);
    form {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 0.5rem;
    }
    button {
      width: 25px;
      aspect-ratio: 1;
    }
  }
`;
