import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledComment = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .comment {
    display: grid;
    grid-template-columns: 35px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "up comment" "down interaction";
    gap: 0.5rem;
  }
  .sub-comments {
    font-size: 0.9em;
    display: grid;
    grid-template-columns: 35px 30px 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "down up comment" "down up interaction";
    gap: 0.5rem;
    .comment-content {
      margin-top: 1rem;
    }
    .comment-side-up {
      margin-top: 1rem;
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
  .comment-side-down {
    grid-area: down;
    display: flex;
    width: 100%;
    justify-content: center;
    span {
      display: block;
      background-color: var(--primary-active);
      width: 2px;
      height: 100%;
    }
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
  }

  .comment-input {
    margin-left: 35px;
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
